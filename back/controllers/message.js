const db = require('../util/database');
const sql = require('mssql')

const perPage = 10;

exports.getMessages = (req, res, next) => {
  const conditions = getSqlQueryConditions(req.query);
  const currentPage = req.query.page || 1;
  let totalMessages;

  db.then(() => getTotalMessages(conditions))
    .then(result => {
      totalMessages = result.recordset[0].totalMessages;
      return getMessages(conditions, currentPage);
    })
    .then(result => prepareResult(res, result.recordset, currentPage, totalMessages))
    .catch(err => res.status(400).json(err.message))
}

prepareResult = (res, messages, currentPage, totalMessages) => {
  const formattedMessages = messages.map(message => {
    return {
      uid: message.uid,
      mobile: message.Mobile,
      text: message.Text,
      createDate: message.CreateDate,
      appName: message.AppName[0],
      providedId: message.Provider_ID,
      isSent: message.Sended,
      isClosed: message.Closed,
      isError: message.ErrFlag,
      isDelivered: message.Delivered
    }
  });

  res.status(200)
     .json({
        messages: formattedMessages,
        currentPage: Number.parseInt(currentPage),
        pages: getTotalPages(totalMessages),
        perPage: perPage
     });
}

getTotalPages = (totalMessages) => {
  const pages = totalMessages ? Math.ceil(totalMessages / perPage) : 0;
  return pages;
}

getMessages = (conditions, currenPage) => {
  const skipItemsAmount = currenPage == 1 ? 0 : perPage * currenPage - perPage;
  const offsetConditions = `OFFSET ${skipItemsAmount} ROWS FETCH NEXT ${perPage} ROWS ONLY`;
  const join = 'INNER JOIN Applications AS app ON app.id = AppID';
  const query = `SELECT app.AppName, * FROM dbo.Messages ${join} ${conditions} ORDER BY CreateDate DESC ${offsetConditions}`;
  return sql.query(query);
}

getTotalMessages = (conditions) => {
  return sql.query(`SELECT count(*) as totalMessages FROM dbo.Messages ${conditions}`);
}

getSqlQueryConditions = (params) => {
  let conditions = [];

  if (!isAnyQueryParameterExist(params)) {
    return "";
  }

  if (params.uid) {
    conditions.push(`uid = '${params.uid}'`);
  }

  if (params.mobile) {
    conditions.push(`Mobile = '${params.mobile}'`);
  }

  if (params.providedId) {
    conditions.push(`Provider_ID = '${params.providedId}'`);
  }

  if (params.isSent === "1" || params.isSent === "0") {
    conditions.push(`Sended = ${params.isSent}`);
  }

  if (params.isClosed === "1" || params.isClosed === "0") {
    conditions.push(`Closed = ${params.isClosed}`);
  }

  if (params.isError === "1" || params.isError === "0") {
    conditions.push(`ErrFlag = ${params.isError}`);
  }

  if (params.isDelivered === "1" || params.isDelivered === "0") {
    conditions.push(`Delivered = ${params.isDelivered}`);
  }

  if (params.createdFrom && params.createdTo) {
    conditions.push(`CreateDate BETWEEN '${params.createdFrom}' AND '${params.createdTo}'`)
  } else if (params.createdFrom || params.createdTo) {
    const createdDate = params.createdFrom ? params.createdFrom : params.createdTo;
    conditions.push(`CreateDate = '${createdDate}'`);
  }

  const queryConditions = conditions.length > 1 ? `WHERE ${conditions.join(' AND ')}` : `WHERE ${conditions[0]}`;

  return queryConditions;
}

isAnyQueryParameterExist = (params) => {
  return  params.uid || 
          params.mobile || 
          params.providedId || 
          params.createdFrom ||
          params.createdTo ||
          params.isSent != null ||
          params.isClosed != null ||
          params.isError != null ||
          params.isDelivered != null;
}