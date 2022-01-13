class GradeSerializer < ActiveModel::Serializer
  attributes :id, :grade, :type_id, :int
end
