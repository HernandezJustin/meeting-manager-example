json.array! @tags.each do |tag|
  json.id tag.id
  json.tags tag.name
end
