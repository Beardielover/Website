class ContactsController < ApplicationController
  
   def new
       @contact = Contact.new
   end
      
    require 'sendgrid-ruby'
    require 'yaml'
    
          
   def create
  @contact = Contact.new(contact_params)
     if @contact.save
       name = params[:contact][:name]
       email = params[:contact][:email]
       body = params[:contact][:comments]
       
       @APP_CONFIG = YAML.load_file("#{Rails.root}/config/config.yml")
  
       username = @APP_CONFIG['credentials']['username']
       password = @APP_CONFIG['credentials']['password']
       site_email = @APP_CONFIG['credentials']['email']
  
       client = SendGrid::Client.new(api_user: username, api_key: password) 
      
      mail = SendGrid::Mail.new do |m|
          m.to = site_email
          m.from = email
          m.subject = 'Contact Form From: ' + name
          m.text = body
     end
        puts client.send(mail) 
      
       flash[:success] = 'Message sent.'
       redirect_to new_contact_path
     else
       flash[:danger] = 'Error occured, message has not been sent.'
       redirect_to new_contact_path
     end
   end
   
   private
      def contact_params
         params.require(:contact).permit(:name, :email, :comments)
      end
end