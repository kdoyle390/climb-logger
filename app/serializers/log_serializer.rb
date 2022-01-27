class LogSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :route_id, :date_sent, :notes, :name, :type_id, :grade_id, :country, :crag, :comments, :coordinates, :gym_route
end
