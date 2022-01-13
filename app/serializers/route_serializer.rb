class RouteSerializer < ActiveModel::Serializer
  attributes :id, :grade_id, :type_id, :user_id, :name, :country, :crag, :comments, :coordinates, :gym_route, :date_created
end
