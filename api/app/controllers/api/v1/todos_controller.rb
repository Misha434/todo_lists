class Api::V1::TodosController < ApplicationController
  before_action :set_todo, only: [:show, :update, :destroy]

  # GET api/v1/todos/
  def index
    @todos = Todo.all
    render json: @todos
  end

  # GET api/v1/todos/:id
  def show
    render json: { status: 'success', data: @todo }
  end

  # Post api/v1/todos
  def create
    @todo = Todo.new(todo_params)
    if @todo.save
      render json: { status: 'success', data: @todo }
    else
      render json: { status: 'error', data: @todo.errors }
    end
  end

  # Put api/v1/todos/:id
  def update
    if @todo.update(todo_params)
      render json: { status: 'success', data: @todo }
    else
      render json: { status: 'error', data: @todo.errors }
    end
  end

  # Delete api/v1/todos/:id
  def destroy
    if @todo.destroy
      render json: { status: 'success', data: @todo }
    else
      render json: todo.errors, status: 422
    end
  end
  
  def destroy_all
    if Todo.destroy_all
      render json: { status: 'success', data: @todo }
    else
      render json: { error: "Failed to destroy" }, status: 422
    end
  end

  private
  def todo_params
    params.require(:todo).permit(:dask, :done)
  end

  def set_todo
    @todo = Todo.find(params[:id])
  end
end
