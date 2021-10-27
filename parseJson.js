const jsonData = require("./public/report.json")
const axios = require("axios")

const postEvents = async events => {
  console.log(JSON.stringify(events))
  
    let res = await axios({
      method: 'post',
      url: "https://insights-collector.newrelic.com/v1/accounts/3209940/events",
      headers: { 'content-type': 'application/json', "X-Insert-Key": 'NRII-iR_JZWQnWP-_PEgc1tcqopUFhRLuzVTl' },
      data: events
    });
  let data = res.data
  console.log(data)
}

const events = []
const getDeepestGroup = (group, label) => {
  if (!group.groups) {
    let newEvent = {
      label,
      eventType: "bundleSize",
      ...group,
    }

    events.push(newEvent)
    return
  }
  group.groups.forEach(group => {
    getDeepestGroup(group)
  })
}
const processFile = data => {
  data.forEach(asset => {
    asset.groups.forEach(group => {
      const { label } = group
      getDeepestGroup(group, label)
    })
  })
}

processFile(jsonData)
postEvents(events)
