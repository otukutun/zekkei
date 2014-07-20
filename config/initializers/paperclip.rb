#Paperclip::Attachment.default_options[:url] = ENV['S3_BUCKET_NAME']
Paperclip::Attachment.default_options[:path] = '/:class/:attachment/:id_partition/:style/:filename'
