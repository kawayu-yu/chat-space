json.array! @message do |message|
  json.body message.body
  json.image message.image.url
  json.created_at message.created_at.strftime("%Y年%m月%d日 %H時%M分")
  json.user.name message.user.name
  josn.id message.id
end