
const jspages = require('@shynome/jspages')

exports.data = jspages.data(ctx=>{
  return {
    name:'string'
  }
})

exports.render = jspages.render(async ( ctx, data=exports.data(ctx) ) =>
`
${data.name}
`)