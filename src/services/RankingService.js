import Api from './Api'

export async function rankingList () {
  let resp = (await Api.get('/matchboxbrasil.json')).data

  resp.data.map(item => {
    item.totalRate = item.positive + item.negative
    item.negativePercent = Math.round((item.negative / item.totalRate) * 100)
    item.positivePercent = Math.round((item.positive / item.totalRate) * 100)
  })
  return resp
}
