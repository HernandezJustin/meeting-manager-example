class Api::V1::MeetingsController < ApplicationController
  def index
    @meetings = Meeting.all
  end

  def tags
    @tags = Tag.all
  end
end
