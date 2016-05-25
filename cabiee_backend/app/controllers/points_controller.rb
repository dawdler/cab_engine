class PointsController < ApplicationController
	
	respond_to :json

	def index
		@points = Point.all
		render json: @points
	end
end
