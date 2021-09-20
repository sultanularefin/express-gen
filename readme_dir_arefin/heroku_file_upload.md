



## file upload in local server worked:

```html

arefin@arefin-HP-ProBook-450-G0:~/Programs/file_upload/express-gen$ heroku login
heroku: Press any key to open up the browser to login or q to exit:
Opening browser to https://cli-auth.heroku.com/auth/cli/browser/99703321-ecf6-4c33-83f8-0bb872f3ccc8?requestor=SFMyNTY.g2gDbQAAAA4xMDMuMTUyLjEwMy43OW4GAECVVgF8AWIAAVGA.jpenLj7U24dc_2pFzro6RbX_j9RYlJUJmzRH4qvhmHg
Logging in... done
Logged in as mhmdarefin@gmail.com
arefin@arefin-HP-ProBook-450-G0:~/Programs/file_upload/express-gen$

```



```html

arefin@arefin-HP-ProBook-450-G0:~/Programs/file_upload/express-gen$ cd ..
arefin@arefin-HP-ProBook-450-G0:~/Programs/file_upload$ heroku git:clone -a arefin-file-upload heroku-express-upload
Cloning into 'heroku-express-upload'...
remote: Counting objects: 65, done.
remote: Compressing objects: 100% (62/62), done.
remote: Total 65 (delta 18), reused 0 (delta 0)
Unpacking objects: 100% (65/65), 224.23 KiB | 40.00 KiB/s, done.
arefin@arefin-HP-ProBook-450-G0:~/Programs/file_upload$ ls
express_app_2021  express-fileupload  express-gen  heroku-express-upload  reactUpload
arefin@arefin-HP-ProBook-450-G0:~/Programs/file_upload$ cd heroku-express-upload/
arefin@arefin-HP-ProBook-450-G0:~/Programs/file_upload/heroku-express-upload$ ls
package.json  public  README.md  src  tsconfig.json  yarn.lock
arefin@arefin-HP-ProBook-450-G0:~/Programs/file_upload/heroku-express-upload$ cd 


```

## to run the application:
## application running: DEBUG=express-gen:* npm start






# heroku cli for upload new app:



## important heroku  command:
## heroku git:remote -a arefin-file-upload

## git push heroku master


arefin@arefin-HP-ProBook-450-G0:~/Programs/file_upload/express-gen$ heroku git:remote -a arefin-file-upload
set git remote heroku to https://git.heroku.com/arefin-file-upload.git
arefin@arefin-HP-ProBook-450-G0:~/Programs/file_upload/express-gen$ git push heroku master
To https://git.heroku.com/arefin-file-upload.git
 ! [rejected]        master -> master (fetch first)
error: failed to push some refs to 'https://git.heroku.com/arefin-file-upload.git'
hint: Updates were rejected because the remote contains work that you do
hint: not have locally. This is usually caused by another repository pushing
hint: to the same ref. You may want to first integrate the remote changes
hint: (e.g., 'git pull ...') before pushing again.
hint: See the 'Note about fast-forwards' in 'git push --help' for details.
arefin@arefin-HP-ProBook-450-G0:~/Programs/file_upload/express-gen$ 





Almost there …
Please check your email (mhmdarefin@gmail.com)
to confirm your account.
If mhmdarefin@gmail.com is not your email address, please go back and enter the correct one.

If you haven't received our email in 15 minutes, please check your spam folder.

Still can't find it? Try searching Gmail for in:all subject:(Confirm your account on Heroku)






