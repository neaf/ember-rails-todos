class TodosController < ApplicationController
  def index
    @todos = Todo.all

    render json: {
             data: @todos.map { |t| represent(t) }
           }
  end

  def create
    @todo = Todo.new(todo_attributes)
    if @todo.save
      render json: {
               data: represent(@todo)
             }
    end
  end

  def update
    @todo = Todo.find(params[:id])
    if @todo.update_attributes(todo_attributes)
      render json: {
               data: represent(@todo)
             }
    end
  end

  private

  def todo_attributes
    params.require(:data).require(:attributes).permit(:text, :completed)
  end

  def represent(todo)
    {
      id: todo.id,
      type: "todo",
      attributes: {
        text: todo.text,
        completed: todo.completed?
      }
    }
  end
end
