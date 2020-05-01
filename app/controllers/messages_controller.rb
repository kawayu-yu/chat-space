class MessagesController < ApplicationController
  before_action :set_group

  def index
    @message = Message.new
    @message = @group.messages.includes(:user)
  end
  
  def create
    @message = @group.message.new(message.params)
    if @message.save
      refirect_to group_message_path(@group), notice: 'メッセージが送信されました'
    else
      @messages = @group.messages.includes(:user)
      flash.now[:alert] = 'メッセージを入力しでください'
      render :index
  end
end

privete
def messege_params
  params.require(:message).permit(:boby. :image).merge(use_id: current_user_id)
end

def set_group
  @group = Group.find(params[:group_id])
