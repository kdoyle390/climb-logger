class LogSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :route_id, :date_sent, :notes
end
