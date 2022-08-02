class Api::V1::QuestionsController < ApiController
    def index
      questions = Question.all
      render json: questions
    end
  end