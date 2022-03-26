class CommentSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :route_id, :content
end
