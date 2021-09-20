



## file upload in local server worked:

```html

arefin@arefin-HP-ProBook-450-G0:~/Programs/file_upload/express-gen$ heroku login
heroku: Press any key to open up the browser to login or q to exit:
Opening browser to https://cli-auth.heroku.com/auth/cli/browser/99703321-ecf6-4c33-83f8-0bb872f3ccc8?requestor=SFMyNTY.g2gDbQAAAA4xMDMuMTUyLjEwMy43OW4GAECVVgF8AWIAAVGA.jpenLj7U24dc_2pFzro6RbX_j9RYlJUJmzRH4qvhmHg
Logging in... done
Logged in as mhmdarefin@gmail.com
arefin@arefin-HP-ProBook-450-G0:~/Programs/file_upload/express-gen$

```

## https://secret-sierra-30985.herokuapp.com/routes/files/ 




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



## upload:

```html

  -> (none)
remote:        Default types for buildpack -> web
remote: 
remote: -----> Compressing...
remote:        Done: 36.6M
remote: -----> Launching...
remote:        Released v3
remote:        https://secret-sierra-30985.herokuapp.com/ deployed to Heroku
remote: 
remote: Verifying deploy... done.
To https://git.heroku.com/secret-sierra-30985.git
 * [new branch]      master -> master
arefin@arefin-HP-ProBook-450-G0:~/Programs/file_upload/express-gen$ heroku ps:scale web=1
Scaling dynos... done, now running web at 1:Free
arefin@arefin-HP-ProBook-450-G0:~/Programs/file_upload/express-gen$ heroku open
arefin@arefin-HP-ProBook-450-G0:~/Programs/file_upload/express-gen$ 

```




## https://secret-sierra-30985.herokuapp.com/upload


```html

{
"errno": -2,
"code": "ENOENT",
"syscall": "open",
"path": "/app/routes/files/Screenshot_2021-09-19_12-07-21.png"
}


```


## https://secret-sierra-30985.herokuapp.com/



```html
ess-fileupload/test/files/emptyfile.txt
 delete mode 100644 node_modules/express-fileupload/test/files/my$Invalid#fileName.png123
 delete mode 100644 node_modules/express-fileupload/test/files/tree.png
 delete mode 100644 node_modules/express-fileupload/test/multipartFields.spec.js
 delete mode 100644 node_modules/express-fileupload/test/multipartUploads.spec.js
 delete mode 100644 node_modules/express-fileupload/test/options.spec.js
 delete mode 100644 node_modules/express-fileupload/test/processNested.spec.js
 delete mode 100644 node_modules/express-fileupload/test/server.js
 delete mode 100644 node_modules/express-fileupload/test/tempFile.spec.js
 delete mode 100644 node_modules/express-fileupload/test/uploadtimer.spec.js
 delete mode 100644 node_modules/express-fileupload/test/utilities.spec.js
 delete mode 100644 node_modules/express/History.md
 delete mode 100644 node_modules/express/LICENSE
 delete mode 100644 node_modules/express/Readme.md
 delete mode 100644 node_modules/express/index.js
 delete mode 100644 node_modules/express/lib/application.js
 delete mode 100644 node_modules/express/lib/express.js
 delete mode 100644 node_modules/express/lib/middleware/init.js
 delete mode 100644 node_modules/express/lib/middleware/query.js
 delete mode 100644 node_modules/express/lib/request.js
 delete mode 100644 node_modules/express/lib/response.js
 delete mode 100644 node_modules/express/lib/router/index.js
 delete mode 100644 node_modules/express/lib/router/layer.js
 delete mode 100644 node_modules/express/lib/router/route.js
 delete mode 100644 node_modules/express/lib/utils.js
 delete mode 100644 node_modules/express/lib/view.js
 delete mode 100644 node_modules/express/package.json
 delete mode 100644 node_modules/finalhandler/HISTORY.md
 delete mode 100644 node_modules/finalhandler/LICENSE
 delete mode 100644 node_modules/finalhandler/README.md
 delete mode 100644 node_modules/finalhandler/index.js
 delete mode 100644 node_modules/finalhandler/package.json
 delete mode 100644 node_modules/forwarded/HISTORY.md
 delete mode 100644 node_modules/forwarded/LICENSE
 delete mode 100644 node_modules/forwarded/README.md
 delete mode 100644 node_modules/forwarded/index.js
 delete mode 100644 node_modules/forwarded/package.json
 delete mode 100644 node_modules/fresh/HISTORY.md
 delete mode 100644 node_modules/fresh/LICENSE
 delete mode 100644 node_modules/fresh/README.md
 delete mode 100644 node_modules/fresh/index.js
 delete mode 100644 node_modules/fresh/package.json
 delete mode 100644 node_modules/graceful-readlink/.npmignore
 delete mode 100644 node_modules/graceful-readlink/.travis.yml
 delete mode 100644 node_modules/graceful-readlink/LICENSE
 delete mode 100644 node_modules/graceful-readlink/README.md
 delete mode 100644 node_modules/graceful-readlink/index.js
 delete mode 100644 node_modules/graceful-readlink/package.json
 delete mode 100644 node_modules/http-errors/HISTORY.md
 delete mode 100644 node_modules/http-errors/LICENSE
 delete mode 100644 node_modules/http-errors/README.md
 delete mode 100644 node_modules/http-errors/index.js
 delete mode 100644 node_modules/http-errors/node_modules/statuses/HISTORY.md
 delete mode 100644 node_modules/http-errors/node_modules/statuses/LICENSE
 delete mode 100644 node_modules/http-errors/node_modules/statuses/README.md
 delete mode 100644 node_modules/http-errors/node_modules/statuses/codes.json
 delete mode 100644 node_modules/http-errors/node_modules/statuses/index.js
 delete mode 100644 node_modules/http-errors/node_modules/statuses/package.json
 delete mode 100644 node_modules/http-errors/package.json
 delete mode 100644 node_modules/iconv-lite/.travis.yml
 delete mode 100644 node_modules/iconv-lite/Changelog.md
 delete mode 100644 node_modules/iconv-lite/LICENSE
 delete mode 100644 node_modules/iconv-lite/README.md
 delete mode 100644 node_modules/iconv-lite/encodings/dbcs-codec.js
 delete mode 100644 node_modules/iconv-lite/encodings/dbcs-data.js
 delete mode 100644 node_modules/iconv-lite/encodings/index.js
 delete mode 100644 node_modules/iconv-lite/encodings/internal.js
 delete mode 100644 node_modules/iconv-lite/encodings/sbcs-codec.js
 delete mode 100644 node_modules/iconv-lite/encodings/sbcs-data-generated.js
 delete mode 100644 node_modules/iconv-lite/encodings/sbcs-data.js
 delete mode 100644 node_modules/iconv-lite/encodings/tables/big5-added.json
 delete mode 100644 node_modules/iconv-lite/encodings/tables/cp936.json
 delete mode 100644 node_modules/iconv-lite/encodings/tables/cp949.json
 delete mode 100644 node_modules/iconv-lite/encodings/tables/cp950.json
 delete mode 100644 node_modules/iconv-lite/encodings/tables/eucjp.json
 delete mode 100644 node_modules/iconv-lite/encodings/tables/gb18030-ranges.json
 delete mode 100644 node_modules/iconv-lite/encodings/tables/gbk-added.json
 delete mode 100644 node_modules/iconv-lite/encodings/tables/shiftjis.json
 delete mode 100644 node_modules/iconv-lite/encodings/utf16.js
 delete mode 100644 node_modules/iconv-lite/encodings/utf7.js
 delete mode 100644 node_modules/iconv-lite/lib/bom-handling.js
 delete mode 100644 node_modules/iconv-lite/lib/extend-node.js
 delete mode 100644 node_modules/iconv-lite/lib/index.d.ts
 delete mode 100644 node_modules/iconv-lite/lib/index.js
 delete mode 100644 node_modules/iconv-lite/lib/streams.js
 delete mode 100644 node_modules/iconv-lite/package.json
 delete mode 100644 node_modules/inherits/LICENSE
 delete mode 100644 node_modules/inherits/README.md
 delete mode 100644 node_modules/inherits/inherits.js
 delete mode 100644 node_modules/inherits/inherits_browser.js
 delete mode 100644 node_modules/inherits/package.json
 delete mode 100644 node_modules/ipaddr.js/LICENSE
 delete mode 100644 node_modules/ipaddr.js/README.md
 delete mode 100644 node_modules/ipaddr.js/ipaddr.min.js
 delete mode 100644 node_modules/ipaddr.js/lib/ipaddr.js
 delete mode 100644 node_modules/ipaddr.js/lib/ipaddr.js.d.ts
 delete mode 100644 node_modules/ipaddr.js/package.json
 delete mode 100644 node_modules/is-buffer/LICENSE
 delete mode 100644 node_modules/is-buffer/README.md
 delete mode 100644 node_modules/is-buffer/index.js
 delete mode 100644 node_modules/is-buffer/package.json
 delete mode 100644 node_modules/is-buffer/test/basic.js
 delete mode 100644 node_modules/is-promise/LICENSE
 delete mode 100644 node_modules/is-promise/index.js
 delete mode 100644 node_modules/is-promise/index.mjs
 delete mode 100644 node_modules/is-promise/package.json
 delete mode 100644 node_modules/is-promise/readme.md
 delete mode 100644 node_modules/jade/.npmignore
 delete mode 100644 node_modules/jade/.release.json
 delete mode 100644 node_modules/jade/History.md
 delete mode 100644 node_modules/jade/LICENSE
 delete mode 100644 node_modules/jade/README.md
 delete mode 100644 node_modules/jade/Readme_zh-cn.md
 delete mode 100755 node_modules/jade/bin/jade.js
 delete mode 100644 node_modules/jade/block-code.html
 delete mode 100644 node_modules/jade/component.json
 delete mode 100644 node_modules/jade/jade.js
 delete mode 100644 node_modules/jade/lib/compiler.js
 delete mode 100644 node_modules/jade/lib/doctypes.js
 delete mode 100644 node_modules/jade/lib/filters-client.js
 delete mode 100644 node_modules/jade/lib/filters.js
 delete mode 100644 node_modules/jade/lib/index.js
 delete mode 100644 node_modules/jade/lib/inline-tags.js
 delete mode 100644 node_modules/jade/lib/lexer.js
 delete mode 100644 node_modules/jade/lib/nodes/attrs.js
 delete mode 100644 node_modules/jade/lib/nodes/block-comment.js
 delete mode 100644 node_modules/jade/lib/nodes/block.js
 delete mode 100644 node_modules/jade/lib/nodes/case.js
 delete mode 100644 node_modules/jade/lib/nodes/code.js
 delete mode 100644 node_modules/jade/lib/nodes/comment.js
 delete mode 100644 node_modules/jade/lib/nodes/doctype.js
 delete mode 100644 node_modules/jade/lib/nodes/each.js
 delete mode 100644 node_modules/jade/lib/nodes/filter.js
 delete mode 100644 node_modules/jade/lib/nodes/index.js
 delete mode 100644 node_modules/jade/lib/nodes/literal.js
 delete mode 100644 node_modules/jade/lib/nodes/mixin-block.js
 delete mode 100644 node_modules/jade/lib/nodes/mixin.js
 delete mode 100644 node_modules/jade/lib/nodes/node.js
 delete mode 100644 node_modules/jade/lib/nodes/tag.js
 delete mode 100644 node_modules/jade/lib/nodes/text.js
 delete mode 100644 node_modules/jade/lib/parser.js
 delete mode 100644 node_modules/jade/lib/runtime.js
 delete mode 100644 node_modules/jade/lib/utils.js
 delete mode 120000 node_modules/jade/node_modules/.bin/cleancss
 delete mode 120000 node_modules/jade/node_modules/.bin/mkdirp
 delete mode 120000 node_modules/jade/node_modules/.bin/uglifyjs
 delete mode 100644 node_modules/jade/package.json
 delete mode 100644 node_modules/jade/release.js
 delete mode 100644 node_modules/jade/runtime.js
 delete mode 100644 node_modules/jstransformer/LICENSE
 delete mode 100644 node_modules/jstransformer/README.md
 delete mode 100644 node_modules/jstransformer/index.js
 delete mode 100644 node_modules/jstransformer/package.json
 delete mode 100644 node_modules/kind-of/LICENSE
 delete mode 100644 node_modules/kind-of/README.md
 delete mode 100644 node_modules/kind-of/index.js
 delete mode 100644 node_modules/kind-of/package.json
 delete mode 100644 node_modules/lazy-cache/LICENSE
 delete mode 100644 node_modules/lazy-cache/README.md
 delete mode 100644 node_modules/lazy-cache/index.js
 delete mode 100644 node_modules/lazy-cache/package.json
 delete mode 100644 node_modules/longest/LICENSE
 delete mode 100644 node_modules/longest/README.md
 delete mode 100644 node_modules/longest/index.js
 delete mode 100644 node_modules/longest/package.json
 delete mode 100644 node_modules/media-typer/HISTORY.md
 delete mode 100644 node_modules/media-typer/LICENSE
 delete mode 100644 node_modules/media-typer/README.md
 delete mode 100644 node_modules/media-typer/index.js
 delete mode 100644 node_modules/media-typer/package.json
 delete mode 100644 node_modules/merge-descriptors/HISTORY.md
 delete mode 100644 node_modules/merge-descriptors/LICENSE
 delete mode 100644 node_modules/merge-descriptors/README.md
 delete mode 100644 node_modules/merge-descriptors/index.js
 delete mode 100644 node_modules/merge-descriptors/package.json
 delete mode 100644 node_modules/methods/HISTORY.md
 delete mode 100644 node_modules/methods/LICENSE
 delete mode 100644 node_modules/methods/README.md
 delete mode 100644 node_modules/methods/index.js
 delete mode 100644 node_modules/methods/package.json
 delete mode 100644 node_modules/mime-db/HISTORY.md
 delete mode 100644 node_modules/mime-db/LICENSE
 delete mode 100644 node_modules/mime-db/README.md
 delete mode 100644 node_modules/mime-db/db.json
 delete mode 100644 node_modules/mime-db/index.js
 delete mode 100644 node_modules/mime-db/package.json
 delete mode 100644 node_modules/mime-types/HISTORY.md
 delete mode 100644 node_modules/mime-types/LICENSE
 delete mode 100644 node_modules/mime-types/README.md
 delete mode 100644 node_modules/mime-types/index.js
 delete mode 100644 node_modules/mime-types/package.json
 delete mode 100644 node_modules/mime/LICENSE
 delete mode 100644 node_modules/mime/README.md
 delete mode 100644 node_modules/mime/build/build.js
 delete mode 100644 node_modules/mime/build/test.js
 delete mode 100755 node_modules/mime/cli.js
 delete mode 100644 node_modules/mime/mime.js
 delete mode 100644 node_modules/mime/package.json
 delete mode 100644 node_modules/mime/types.json
 delete mode 100644 node_modules/minimist/.travis.yml
 delete mode 100644 node_modules/minimist/LICENSE
 delete mode 100644 node_modules/minimist/example/parse.js
 delete mode 100644 node_modules/minimist/index.js
 delete mode 100644 node_modules/minimist/package.json
 delete mode 100644 node_modules/minimist/readme.markdown
 delete mode 100644 node_modules/minimist/test/all_bool.js
 delete mode 100644 node_modules/minimist/test/bool.js
 delete mode 100644 node_modules/minimist/test/dash.js
 delete mode 100644 node_modules/minimist/test/default_bool.js
 delete mode 100644 node_modules/minimist/test/dotted.js
 delete mode 100644 node_modules/minimist/test/kv_short.js
 delete mode 100644 node_modules/minimist/test/long.js
 delete mode 100644 node_modules/minimist/test/num.js
 delete mode 100644 node_modules/minimist/test/parse.js
 delete mode 100644 node_modules/minimist/test/parse_modified.js
 delete mode 100644 node_modules/minimist/test/proto.js
 delete mode 100644 node_modules/minimist/test/short.js
 delete mode 100644 node_modules/minimist/test/stop_early.js
 delete mode 100644 node_modules/minimist/test/unknown.js
 delete mode 100644 node_modules/minimist/test/whitespace.js
 delete mode 100644 node_modules/mkdirp/LICENSE
 delete mode 100755 node_modules/mkdirp/bin/cmd.js
 delete mode 100644 node_modules/mkdirp/bin/usage.txt
 delete mode 100644 node_modules/mkdirp/index.js
 delete mode 100644 node_modules/mkdirp/package.json
 delete mode 100644 node_modules/mkdirp/readme.markdown
 delete mode 100644 node_modules/morgan/HISTORY.md
 delete mode 100644 node_modules/morgan/LICENSE
 delete mode 100644 node_modules/morgan/README.md
 delete mode 100644 node_modules/morgan/index.js
 delete mode 100644 node_modules/morgan/package.json
 delete mode 100644 node_modules/ms/index.js
 delete mode 100644 node_modules/ms/license.md
 delete mode 100644 node_modules/ms/package.json
 delete mode 100644 node_modules/ms/readme.md
 delete mode 100644 node_modules/negotiator/HISTORY.md
 delete mode 100644 node_modules/negotiator/LICENSE
 delete mode 100644 node_modules/negotiator/README.md
 delete mode 100644 node_modules/negotiator/index.js
 delete mode 100644 node_modules/negotiator/lib/charset.js
 delete mode 100644 node_modules/negotiator/lib/encoding.js
 delete mode 100644 node_modules/negotiator/lib/language.js
 delete mode 100644 node_modules/negotiator/lib/mediaType.js
 delete mode 100644 node_modules/negotiator/package.json
 delete mode 100644 node_modules/on-finished/HISTORY.md
 delete mode 100644 node_modules/on-finished/LICENSE
 delete mode 100644 node_modules/on-finished/README.md
 delete mode 100644 node_modules/on-finished/index.js
 delete mode 100644 node_modules/on-finished/package.json
 delete mode 100644 node_modules/on-headers/HISTORY.md
 delete mode 100644 node_modules/on-headers/LICENSE
 delete mode 100644 node_modules/on-headers/README.md
 delete mode 100644 node_modules/on-headers/index.js
 delete mode 100644 node_modules/on-headers/package.json
 delete mode 100644 node_modules/optimist/.travis.yml
 delete mode 100644 node_modules/optimist/LICENSE
 delete mode 100644 node_modules/optimist/example/bool.js
 delete mode 100644 node_modules/optimist/example/boolean_double.js
 delete mode 100644 node_modules/optimist/example/boolean_single.js
 delete mode 100644 node_modules/optimist/example/default_hash.js
 delete mode 100644 node_modules/optimist/example/default_singles.js
 delete mode 100644 node_modules/optimist/example/divide.js
 delete mode 100644 node_modules/optimist/example/line_count.js
 delete mode 100644 node_modules/optimist/example/line_count_options.js
 delete mode 100644 node_modules/optimist/example/line_count_wrap.js
 delete mode 100644 node_modules/optimist/example/nonopt.js
 delete mode 100644 node_modules/optimist/example/reflect.js
 delete mode 100644 node_modules/optimist/example/short.js
 delete mode 100644 node_modules/optimist/example/string.js
 delete mode 100644 node_modules/optimist/example/usage-options.js
 delete mode 100644 node_modules/optimist/example/xup.js
 delete mode 100644 node_modules/optimist/index.js
 delete mode 100644 node_modules/optimist/node_modules/wordwrap/LICENSE
 delete mode 100644 node_modules/optimist/node_modules/wordwrap/README.markdown
 delete mode 100644 node_modules/optimist/node_modules/wordwrap/example/center.js
 delete mode 100644 node_modules/optimist/node_modules/wordwrap/example/meat.js
 delete mode 100644 node_modules/optimist/node_modules/wordwrap/index.js
 delete mode 100644 node_modules/optimist/node_modules/wordwrap/package.json
 delete mode 100644 node_modules/optimist/node_modules/wordwrap/test/break.js
 delete mode 100644 node_modules/optimist/node_modules/wordwrap/test/idleness.txt
 delete mode 100644 node_modules/optimist/node_modules/wordwrap/test/wrap.js
 delete mode 100644 node_modules/optimist/package.json
 delete mode 100644 node_modules/optimist/readme.markdown
 delete mode 100644 node_modules/optimist/test/_.js
 delete mode 100644 node_modules/optimist/test/_/argv.js
 delete mode 100755 node_modules/optimist/test/_/bin.js
 delete mode 100644 node_modules/optimist/test/parse.js
 delete mode 100644 node_modules/optimist/test/usage.js
 delete mode 100644 node_modules/parseurl/HISTORY.md
 delete mode 100644 node_modules/parseurl/LICENSE
 delete mode 100644 node_modules/parseurl/README.md
 delete mode 100644 node_modules/parseurl/index.js
 delete mode 100644 node_modules/parseurl/package.json
 delete mode 100644 node_modules/path-to-regexp/History.md
 delete mode 100644 node_modules/path-to-regexp/LICENSE
 delete mode 100644 node_modules/path-to-regexp/Readme.md
 delete mode 100644 node_modules/path-to-regexp/index.js
 delete mode 100644 node_modules/path-to-regexp/package.json
 delete mode 100644 node_modules/promise/.jshintrc
 delete mode 100644 node_modules/promise/.npmignore
 delete mode 100644 node_modules/promise/LICENSE
 delete mode 100644 node_modules/promise/Readme.md
 delete mode 100644 node_modules/promise/core.js
 delete mode 100644 node_modules/promise/index.js
 delete mode 100644 node_modules/promise/lib/core.js
 delete mode 100644 node_modules/promise/lib/done.js
 delete mode 100644 node_modules/promise/lib/es6-extensions.js
 delete mode 100644 node_modules/promise/lib/node-extensions.js
 delete mode 100644 node_modules/promise/package.json
 delete mode 100644 node_modules/promise/polyfill-done.js
 delete mode 100644 node_modules/promise/polyfill.js
 delete mode 100644 node_modules/proxy-addr/HISTORY.md
 delete mode 100644 node_modules/proxy-addr/LICENSE
 delete mode 100644 node_modules/proxy-addr/README.md
 delete mode 100644 node_modules/proxy-addr/index.js
 delete mode 100644 node_modules/proxy-addr/package.json
 delete mode 100644 node_modules/qs/.editorconfig
 delete mode 100644 node_modules/qs/.eslintignore
 delete mode 100644 node_modules/qs/.eslintrc
 delete mode 100644 node_modules/qs/CHANGELOG.md
 delete mode 100644 node_modules/qs/LICENSE
 delete mode 100644 node_modules/qs/README.md
 delete mode 100644 node_modules/qs/dist/qs.js
 delete mode 100644 node_modules/qs/lib/formats.js
 delete mode 100644 node_modules/qs/lib/index.js
 delete mode 100644 node_modules/qs/lib/parse.js
 delete mode 100644 node_modules/qs/lib/stringify.js
 delete mode 100644 node_modules/qs/lib/utils.js
 delete mode 100644 node_modules/qs/package.json
 delete mode 100644 node_modules/qs/test/.eslintrc
 delete mode 100644 node_modules/qs/test/index.js
 delete mode 100644 node_modules/qs/test/parse.js
 delete mode 100644 node_modules/qs/test/stringify.js
 delete mode 100644 node_modules/qs/test/utils.js
 delete mode 100644 node_modules/range-parser/HISTORY.md
 delete mode 100644 node_modules/range-parser/LICENSE
 delete mode 100644 node_modules/range-parser/README.md
 delete mode 100644 node_modules/range-parser/index.js
 delete mode 100644 node_modules/range-parser/package.json
 delete mode 100644 node_modules/raw-body/HISTORY.md
 delete mode 100644 node_modules/raw-body/LICENSE
 delete mode 100644 node_modules/raw-body/README.md
 delete mode 100644 node_modules/raw-body/index.d.ts
 delete mode 100644 node_modules/raw-body/index.js
 delete mode 100644 node_modules/raw-body/package.json
 delete mode 100644 node_modules/repeat-string/LICENSE
 delete mode 100644 node_modules/repeat-string/README.md
 delete mode 100644 node_modules/repeat-string/index.js
 delete mode 100644 node_modules/repeat-string/package.json
 delete mode 100644 node_modules/right-align/LICENSE
 delete mode 100644 node_modules/right-align/README.md
 delete mode 100644 node_modules/right-align/index.js
 delete mode 100644 node_modules/right-align/package.json
 delete mode 100644 node_modules/safe-buffer/LICENSE
 delete mode 100644 node_modules/safe-buffer/README.md
 delete mode 100644 node_modules/safe-buffer/index.d.ts
 delete mode 100644 node_modules/safe-buffer/index.js
 delete mode 100644 node_modules/safe-buffer/package.json
 delete mode 100644 node_modules/safer-buffer/LICENSE
 delete mode 100644 node_modules/safer-buffer/Porting-Buffer.md
 delete mode 100644 node_modules/safer-buffer/Readme.md
 delete mode 100644 node_modules/safer-buffer/dangerous.js
 delete mode 100644 node_modules/safer-buffer/package.json
 delete mode 100644 node_modules/safer-buffer/safer.js
 delete mode 100644 node_modules/safer-buffer/tests.js
 delete mode 100644 node_modules/send/HISTORY.md
 delete mode 100644 node_modules/send/LICENSE
 delete mode 100644 node_modules/send/README.md
 delete mode 100644 node_modules/send/index.js
 delete mode 120000 node_modules/send/node_modules/.bin/mime
 delete mode 100644 node_modules/send/package.json
 delete mode 100644 node_modules/serve-static/HISTORY.md
 delete mode 100644 node_modules/serve-static/LICENSE
 delete mode 100644 node_modules/serve-static/README.md
 delete mode 100644 node_modules/serve-static/index.js
 delete mode 100644 node_modules/serve-static/package.json
 delete mode 100644 node_modules/setprototypeof/LICENSE
 delete mode 100644 node_modules/setprototypeof/README.md
 delete mode 100644 node_modules/setprototypeof/index.d.ts
 delete mode 100644 node_modules/setprototypeof/index.js
 delete mode 100644 node_modules/setprototypeof/package.json
 delete mode 100644 node_modules/source-map/README.md
 delete mode 100644 node_modules/source-map/build/assert-shim.js
 delete mode 100644 node_modules/source-map/build/mini-require.js
 delete mode 100644 node_modules/source-map/build/prefix-source-map.jsm
 delete mode 100644 node_modules/source-map/build/prefix-utils.jsm
 delete mode 100644 node_modules/source-map/build/suffix-browser.js
 delete mode 100644 node_modules/source-map/build/suffix-source-map.jsm
 delete mode 100644 node_modules/source-map/build/suffix-utils.jsm
 delete mode 100644 node_modules/source-map/build/test-prefix.js
 delete mode 100644 node_modules/source-map/build/test-suffix.js
 delete mode 100644 node_modules/source-map/lib/source-map.js
 delete mode 100644 node_modules/source-map/lib/source-map/array-set.js
 delete mode 100644 node_modules/source-map/lib/source-map/base64-vlq.js
 delete mode 100644 node_modules/source-map/lib/source-map/base64.js
 delete mode 100644 node_modules/source-map/lib/source-map/binary-search.js
 delete mode 100644 node_modules/source-map/lib/source-map/mapping-list.js
 delete mode 100644 node_modules/source-map/lib/source-map/quick-sort.js
 delete mode 100644 node_modules/source-map/lib/source-map/source-map-consumer.js
 delete mode 100644 node_modules/source-map/lib/source-map/source-map-generator.js
 delete mode 100644 node_modules/source-map/lib/source-map/source-node.js
 delete mode 100644 node_modules/source-map/lib/source-map/util.js
 delete mode 100644 node_modules/source-map/package.json
 delete mode 100644 node_modules/statuses/HISTORY.md
 delete mode 100644 node_modules/statuses/LICENSE
 delete mode 100644 node_modules/statuses/README.md
 delete mode 100644 node_modules/statuses/codes.json
 delete mode 100644 node_modules/statuses/index.js
 delete mode 100644 node_modules/statuses/package.json
 delete mode 100644 node_modules/streamsearch/LICENSE
 delete mode 100644 node_modules/streamsearch/README.md
 delete mode 100644 node_modules/streamsearch/lib/sbmh.js
 delete mode 100644 node_modules/streamsearch/package.json
 delete mode 100644 node_modules/transformers/.npmignore
 delete mode 100644 node_modules/transformers/README.md
 delete mode 100644 node_modules/transformers/history.md
 delete mode 100644 node_modules/transformers/lib/shared.js
 delete mode 100644 node_modules/transformers/lib/transformers.js
 delete mode 120000 node_modules/transformers/node_modules/.bin/uglifyjs
 delete mode 100644 node_modules/transformers/node_modules/is-promise/.npmignore
 delete mode 100644 node_modules/transformers/node_modules/is-promise/.travis.yml
 delete mode 100644 node_modules/transformers/node_modules/is-promise/LICENSE
 delete mode 100644 node_modules/transformers/node_modules/is-promise/index.js
 delete mode 100644 node_modules/transformers/node_modules/is-promise/package.json
 delete mode 100644 node_modules/transformers/node_modules/is-promise/readme.md
 delete mode 100644 node_modules/transformers/node_modules/promise/.npmignore
 delete mode 100644 node_modules/transformers/node_modules/promise/Readme.md
 delete mode 100644 node_modules/transformers/node_modules/promise/index.js
 delete mode 100644 node_modules/transformers/node_modules/promise/package.json
 delete mode 100644 node_modules/transformers/node_modules/source-map/.npmignore
 delete mode 100644 node_modules/transformers/node_modules/source-map/.travis.yml
 delete mode 100644 node_modules/transformers/node_modules/source-map/CHANGELOG.md
 delete mode 100644 node_modules/transformers/node_modules/source-map/LICENSE
 delete mode 100644 node_modules/transformers/node_modules/source-map/Makefile.dryice.js
 delete mode 100644 node_modules/transformers/node_modules/source-map/README.md
 delete mode 100644 node_modules/transformers/node_modules/source-map/build/assert-shim.js
 delete mode 100644 node_modules/transformers/node_modules/source-map/build/mini-require.js
 delete mode 100644 node_modules/transformers/node_modules/source-map/build/prefix-source-map.jsm
 delete mode 100644 node_modules/transformers/node_modules/source-map/build/prefix-utils.jsm
 delete mode 100644 node_modules/transformers/node_modules/source-map/build/suffix-browser.js
 delete mode 100644 node_modules/transformers/node_modules/source-map/build/suffix-source-map.jsm
 delete mode 100644 node_modules/transformers/node_modules/source-map/build/suffix-utils.jsm
 delete mode 100644 node_modules/transformers/node_modules/source-map/build/test-prefix.js
 delete mode 100644 node_modules/transformers/node_modules/source-map/build/test-suffix.js
 delete mode 100644 node_modules/transformers/node_modules/source-map/lib/source-map.js
 delete mode 100644 node_modules/transformers/node_modules/source-map/lib/source-map/array-set.js
 delete mode 100644 node_modules/transformers/node_modules/source-map/lib/source-map/base64-vlq.js
 delete mode 100644 node_modules/transformers/node_modules/source-map/lib/source-map/base64.js
 delete mode 100644 node_modules/transformers/node_modules/source-map/lib/source-map/binary-search.js
 delete mode 100644 node_modules/transformers/node_modules/source-map/lib/source-map/mapping-list.js
 delete mode 100644 node_modules/transformers/node_modules/source-map/lib/source-map/source-map-consumer.js
 delete mode 100644 node_modules/transformers/node_modules/source-map/lib/source-map/source-map-generator.js
 delete mode 100644 node_modules/transformers/node_modules/source-map/lib/source-map/source-node.js
 delete mode 100644 node_modules/transformers/node_modules/source-map/lib/source-map/util.js
 delete mode 100644 node_modules/transformers/node_modules/source-map/package.json
 delete mode 100755 node_modules/transformers/node_modules/source-map/test/run-tests.js
 delete mode 100644 node_modules/transformers/node_modules/source-map/test/source-map/test-api.js
 delete mode 100644 node_modules/transformers/node_modules/source-map/test/source-map/test-array-set.js
 delete mode 100644 node_modules/transformers/node_modules/source-map/test/source-map/test-base64-vlq.js
 delete mode 100644 node_modules/transformers/node_modules/source-map/test/source-map/test-base64.js
 delete mode 100644 node_modules/transformers/node_modules/source-map/test/source-map/test-binary-search.js
 delete mode 100644 node_modules/transformers/node_modules/source-map/test/source-map/test-dog-fooding.js
 delete mode 100644 node_modules/transformers/node_modules/source-map/test/source-map/test-source-map-consumer.js
 delete mode 100644 node_modules/transformers/node_modules/source-map/test/source-map/test-source-map-generator.js
 delete mode 100644 node_modules/transformers/node_modules/source-map/test/source-map/test-source-node.js
 delete mode 100644 node_modules/transformers/node_modules/source-map/test/source-map/test-util.js
 delete mode 100644 node_modules/transformers/node_modules/source-map/test/source-map/util.js
 delete mode 100644 node_modules/transformers/node_modules/uglify-js/.npmignore
 delete mode 100644 node_modules/transformers/node_modules/uglify-js/README.md
 delete mode 100755 node_modules/transformers/node_modules/uglify-js/bin/uglifyjs
 delete mode 100644 node_modules/transformers/node_modules/uglify-js/lib/ast.js
 delete mode 100644 node_modules/transformers/node_modules/uglify-js/lib/compress.js
 delete mode 100644 node_modules/transformers/node_modules/uglify-js/lib/mozilla-ast.js
 delete mode 100644 node_modules/transformers/node_modules/uglify-js/lib/output.js
 delete mode 100644 node_modules/transformers/node_modules/uglify-js/lib/parse.js
 delete mode 100644 node_modules/transformers/node_modules/uglify-js/lib/scope.js
 delete mode 100644 node_modules/transformers/node_modules/uglify-js/lib/sourcemap.js
 delete mode 100644 node_modules/transformers/node_modules/uglify-js/lib/transform.js
 delete mode 100644 node_modules/transformers/node_modules/uglify-js/lib/utils.js
 delete mode 100644 node_modules/transformers/node_modules/uglify-js/package.json
 delete mode 100644 node_modules/transformers/node_modules/uglify-js/test/compress/arrays.js
 delete mode 100644 node_modules/transformers/node_modules/uglify-js/test/compress/blocks.js
 delete mode 100644 node_modules/transformers/node_modules/uglify-js/test/compress/conditionals.js
 delete mode 100644 node_modules/transformers/node_modules/uglify-js/test/compress/dead-code.js
 delete mode 100644 node_modules/transformers/node_modules/uglify-js/test/compress/debugger.js
 delete mode 100644 node_modules/transformers/node_modules/uglify-js/test/compress/drop-unused.js
 delete mode 100644 node_modules/transformers/node_modules/uglify-js/test/compress/issue-105.js
 delete mode 100644 node_modules/transformers/node_modules/uglify-js/test/compress/issue-12.js
 delete mode 100644 node_modules/transformers/node_modules/uglify-js/test/compress/issue-22.js
 delete mode 100644 node_modules/transformers/node_modules/uglify-js/test/compress/issue-44.js
 delete mode 100644 node_modules/transformers/node_modules/uglify-js/test/compress/issue-59.js
 delete mode 100644 node_modules/transformers/node_modules/uglify-js/test/compress/labels.js
 delete mode 100644 node_modules/transformers/node_modules/uglify-js/test/compress/loops.js
 delete mode 100644 node_modules/transformers/node_modules/uglify-js/test/compress/properties.js
 delete mode 100644 node_modules/transformers/node_modules/uglify-js/test/compress/sequences.js
 delete mode 100644 node_modules/transformers/node_modules/uglify-js/test/compress/switch.js
 delete mode 100755 node_modules/transformers/node_modules/uglify-js/test/run-tests.js
 delete mode 100644 node_modules/transformers/node_modules/uglify-js/tools/node.js
 delete mode 100644 node_modules/transformers/package.json
 delete mode 100644 node_modules/type-is/HISTORY.md
 delete mode 100644 node_modules/type-is/LICENSE
 delete mode 100644 node_modules/type-is/README.md
 delete mode 100644 node_modules/type-is/index.js
 delete mode 100644 node_modules/type-is/package.json
 delete mode 100644 node_modules/uglify-js/LICENSE
 delete mode 100644 node_modules/uglify-js/README.md
 delete mode 100644 node_modules/uglify-js/bin/extract-props.js
 delete mode 100755 node_modules/uglify-js/bin/uglifyjs
 delete mode 100644 node_modules/uglify-js/lib/ast.js
 delete mode 100644 node_modules/uglify-js/lib/compress.js
 delete mode 100644 node_modules/uglify-js/lib/mozilla-ast.js
 delete mode 100644 node_modules/uglify-js/lib/output.js
 delete mode 100644 node_modules/uglify-js/lib/parse.js
 delete mode 100644 node_modules/uglify-js/lib/propmangle.js
 delete mode 100644 node_modules/uglify-js/lib/scope.js
 delete mode 100644 node_modules/uglify-js/lib/sourcemap.js
 delete mode 100644 node_modules/uglify-js/lib/transform.js
 delete mode 100644 node_modules/uglify-js/lib/utils.js
 delete mode 100644 node_modules/uglify-js/node_modules/source-map/CHANGELOG.md
 delete mode 100644 node_modules/uglify-js/node_modules/source-map/LICENSE
 delete mode 100644 node_modules/uglify-js/node_modules/source-map/README.md
 delete mode 100644 node_modules/uglify-js/node_modules/source-map/dist/source-map.debug.js
 delete mode 100644 node_modules/uglify-js/node_modules/source-map/dist/source-map.js
 delete mode 100644 node_modules/uglify-js/node_modules/source-map/dist/source-map.min.js
 delete mode 100644 node_modules/uglify-js/node_modules/source-map/dist/source-map.min.js.map
 delete mode 100644 node_modules/uglify-js/node_modules/source-map/lib/array-set.js
 delete mode 100644 node_modules/uglify-js/node_modules/source-map/lib/base64-vlq.js
 delete mode 100644 node_modules/uglify-js/node_modules/source-map/lib/base64.js
 delete mode 100644 node_modules/uglify-js/node_modules/source-map/lib/binary-search.js
 delete mode 100644 node_modules/uglify-js/node_modules/source-map/lib/mapping-list.js
 delete mode 100644 node_modules/uglify-js/node_modules/source-map/lib/quick-sort.js
 delete mode 100644 node_modules/uglify-js/node_modules/source-map/lib/source-map-consumer.js
 delete mode 100644 node_modules/uglify-js/node_modules/source-map/lib/source-map-generator.js
 delete mode 100644 node_modules/uglify-js/node_modules/source-map/lib/source-node.js
 delete mode 100644 node_modules/uglify-js/node_modules/source-map/lib/util.js
 delete mode 100644 node_modules/uglify-js/node_modules/source-map/package.json
 delete mode 100644 node_modules/uglify-js/node_modules/source-map/source-map.js
 delete mode 100644 node_modules/uglify-js/package.json
 delete mode 100644 node_modules/uglify-js/tools/domprops.json
 delete mode 100644 node_modules/uglify-js/tools/exports.js
 delete mode 100644 node_modules/uglify-js/tools/node.js
 delete mode 100644 node_modules/uglify-js/tools/props.html
 delete mode 100644 node_modules/uglify-to-browserify/.npmignore
 delete mode 100644 node_modules/uglify-to-browserify/.travis.yml
 delete mode 100644 node_modules/uglify-to-browserify/LICENSE
 delete mode 100644 node_modules/uglify-to-browserify/README.md
 delete mode 100644 node_modules/uglify-to-browserify/index.js
 delete mode 100644 node_modules/uglify-to-browserify/package.json
 delete mode 100644 node_modules/uglify-to-browserify/test/index.js
 delete mode 100644 node_modules/unpipe/HISTORY.md
 delete mode 100644 node_modules/unpipe/LICENSE
 delete mode 100644 node_modules/unpipe/README.md
 delete mode 100644 node_modules/unpipe/index.js
 delete mode 100644 node_modules/unpipe/package.json
 delete mode 100644 node_modules/utils-merge/.npmignore
 delete mode 100644 node_modules/utils-merge/LICENSE
 delete mode 100644 node_modules/utils-merge/README.md
 delete mode 100644 node_modules/utils-merge/index.js
 delete mode 100644 node_modules/utils-merge/package.json
 delete mode 100644 node_modules/vary/HISTORY.md
 delete mode 100644 node_modules/vary/LICENSE
 delete mode 100644 node_modules/vary/README.md
 delete mode 100644 node_modules/vary/index.js
 delete mode 100644 node_modules/vary/package.json
 delete mode 100644 node_modules/void-elements/.gitattributes
 delete mode 100644 node_modules/void-elements/.npmignore
 delete mode 100644 node_modules/void-elements/.travis.yml
 delete mode 100644 node_modules/void-elements/LICENSE
 delete mode 100644 node_modules/void-elements/README.md
 delete mode 100644 node_modules/void-elements/index.js
 delete mode 100644 node_modules/void-elements/package.json
 delete mode 100644 node_modules/void-elements/pre-publish.js
 delete mode 100644 node_modules/void-elements/test/index.js
 delete mode 100644 node_modules/window-size/LICENSE-MIT
 delete mode 100644 node_modules/window-size/README.md
 delete mode 100644 node_modules/window-size/index.js
 delete mode 100644 node_modules/window-size/package.json
 delete mode 100644 node_modules/with/.npmignore
 delete mode 100644 node_modules/with/LICENSE
 delete mode 100644 node_modules/with/README.md
 delete mode 100644 node_modules/with/index.js
 delete mode 120000 node_modules/with/node_modules/.bin/acorn
 delete mode 100644 node_modules/with/node_modules/acorn/.editorconfig
 delete mode 100644 node_modules/with/node_modules/acorn/.gitattributes
 delete mode 100644 node_modules/with/node_modules/acorn/.npmignore
 delete mode 100644 node_modules/with/node_modules/acorn/.tern-project
 delete mode 100644 node_modules/with/node_modules/acorn/.travis.yml
 delete mode 100644 node_modules/with/node_modules/acorn/AUTHORS
 delete mode 100644 node_modules/with/node_modules/acorn/LICENSE
 delete mode 100644 node_modules/with/node_modules/acorn/README.md
 delete mode 100755 node_modules/with/node_modules/acorn/bin/acorn
 delete mode 100644 node_modules/with/node_modules/acorn/bin/build-acorn.js
 delete mode 100644 node_modules/with/node_modules/acorn/bin/generate-identifier-regex.js
 delete mode 100755 node_modules/with/node_modules/acorn/bin/prepublish.sh
 delete mode 100755 node_modules/with/node_modules/acorn/bin/update_authors.sh
 delete mode 100755 node_modules/with/node_modules/acorn/bin/without_eval
 delete mode 100644 node_modules/with/node_modules/acorn/dist/.keep
 delete mode 100644 node_modules/with/node_modules/acorn/dist/acorn.js
 delete mode 100644 node_modules/with/node_modules/acorn/dist/acorn_csp.js
 delete mode 100644 node_modules/with/node_modules/acorn/dist/acorn_loose.js
 delete mode 100644 node_modules/with/node_modules/acorn/dist/walk.js
 delete mode 100644 node_modules/with/node_modules/acorn/package.json
 delete mode 100755 node_modules/with/node_modules/acorn/src/expression.js
 delete mode 100644 node_modules/with/node_modules/acorn/src/identifier.js
 delete mode 100644 node_modules/with/node_modules/acorn/src/index.js
 delete mode 100755 node_modules/with/node_modules/acorn/src/location.js
 delete mode 100644 node_modules/with/node_modules/acorn/src/loose/acorn_loose.js
 delete mode 100644 node_modules/with/node_modules/acorn/src/loose/expression.js
 delete mode 100644 node_modules/with/node_modules/acorn/src/loose/index.js
 delete mode 100644 node_modules/with/node_modules/acorn/src/loose/parseutil.js
 delete mode 100644 node_modules/with/node_modules/acorn/src/loose/state.js
 delete mode 100644 node_modules/with/node_modules/acorn/src/loose/statement.js
 delete mode 100644 node_modules/with/node_modules/acorn/src/loose/tokenize.js
 delete mode 100755 node_modules/with/node_modules/acorn/src/lval.js
 delete mode 100755 node_modules/with/node_modules/acorn/src/node.js
 delete mode 100644 node_modules/with/node_modules/acorn/src/options.js
 delete mode 100644 node_modules/with/node_modules/acorn/src/parseutil.js
 delete mode 100644 node_modules/with/node_modules/acorn/src/state.js
 delete mode 100644 node_modules/with/node_modules/acorn/src/statement.js
 delete mode 100644 node_modules/with/node_modules/acorn/src/tokencontext.js
 delete mode 100644 node_modules/with/node_modules/acorn/src/tokenize.js
 delete mode 100644 node_modules/with/node_modules/acorn/src/tokentype.js
 delete mode 100644 node_modules/with/node_modules/acorn/src/util.js
 delete mode 100644 node_modules/with/node_modules/acorn/src/walk/index.js
 delete mode 100644 node_modules/with/node_modules/acorn/src/whitespace.js
 delete mode 100644 node_modules/with/package.json
 delete mode 100644 node_modules/wordwrap/.npmignore
 delete mode 100644 node_modules/wordwrap/README.markdown
 delete mode 100644 node_modules/wordwrap/example/center.js
 delete mode 100644 node_modules/wordwrap/example/meat.js
 delete mode 100644 node_modules/wordwrap/index.js
 delete mode 100644 node_modules/wordwrap/package.json
 delete mode 100644 node_modules/wordwrap/test/break.js
 delete mode 100644 node_modules/wordwrap/test/idleness.txt
 delete mode 100644 node_modules/wordwrap/test/wrap.js
 delete mode 100644 node_modules/yargs/CHANGELOG.md
 delete mode 100644 node_modules/yargs/LICENSE
 delete mode 100644 node_modules/yargs/README.md
 delete mode 100644 node_modules/yargs/completion.sh.hbs
 delete mode 100644 node_modules/yargs/index.js
 delete mode 100644 node_modules/yargs/lib/completion.js
 delete mode 100644 node_modules/yargs/lib/parser.js
 delete mode 100644 node_modules/yargs/lib/usage.js
 delete mode 100644 node_modules/yargs/lib/validation.js
 delete mode 100644 node_modules/yargs/package.json
 create mode 100644 readme_dir_arefin/heroku_file_upload.md
arefin@arefin-HP-ProBook-450-G0:~/Programs/file_upload/express-gen$ git branch
  05_xyz
* master
  tmp
arefin@arefin-HP-ProBook-450-G0:~/Programs/file_upload/express-gen$ heroku create
Creating app... done, ⬢ secret-sierra-30985
https://secret-sierra-30985.herokuapp.com/ | https://git.heroku.com/secret-sierra-30985.git
arefin@arefin-HP-ProBook-450-G0:~/Programs/file_upload/express-gen$ git push heroku master
To https://git.heroku.com/arefin-file-upload.git
 ! [rejected]        master -> master (non-fast-forward)
error: failed to push some refs to 'https://git.heroku.com/arefin-file-upload.git'
hint: Updates were rejected because the tip of your current branch is behind
hint: its remote counterpart. Integrate the remote changes (e.g.
hint: 'git pull ...') before pushing again.
hint: See the 'Note about fast-forwards' in 'git push --help' for details.
arefin@arefin-HP-ProBook-450-G0:~/Programs/file_upload/express-gen$ heroku git:remote
 ›   Error: Specify an app with --app
arefin@arefin-HP-ProBook-450-G0:~/Programs/file_upload/express-gen$ Git remote heroku added

Command 'Git' not found, did you mean:

  command 'git' from deb git (1:2.25.1-1ubuntu3.2)
  command 'wit' from deb wit (3.01a-2)
  command 'vit' from deb vit (2.0.0-1)

Try: sudo apt install <deb name>

arefin@arefin-HP-ProBook-450-G0:~/Programs/file_upload/express-gen$ heroku git:remote --app secret-sierra-30985
set git remote heroku to https://git.heroku.com/secret-sierra-30985.git
arefin@arefin-HP-ProBook-450-G0:~/Programs/file_upload/express-gen$ git push heroku master
Enumerating objects: 1254, done.
Counting objects: 100% (1254/1254), done.
Delta compression using up to 4 threads
Compressing objects: 100% (1173/1173), done.
Writing objects: 100% (1254/1254), 12.41 MiB | 431.00 KiB/s, done.
Total 1254 (delta 212), reused 0 (delta 0)
remote: Compressing source files... done.
remote: Building source:
remote: 
remote: -----> Building on the Heroku-20 stack
remote: -----> Determining which buildpack to use for this app
remote: -----> Node.js app detected
remote: 
remote: -----> Build failed
remote:  !     Two different lockfiles found: package-lock.json and yarn.lock
remote: 
remote:        Both npm and yarn have created lockfiles for this application,
remote:        but only one can be used to install dependencies. Installing
remote:        dependencies using the wrong package manager can result in missing
remote:        packages or subtle bugs in production.
remote: 
remote:        - To use npm to install your application's dependencies please delete
remote:          the yarn.lock file.
remote: 
remote:          $ git rm yarn.lock
remote: 
remote:        - To use yarn to install your application's dependencies please delete
remote:          the package-lock.json file.
remote: 
remote:          $ git rm package-lock.json
remote:     
remote:        https://help.heroku.com/0KU2EM53
remote: 
remote:  !     Push rejected, failed to compile Node.js app.
remote: 
remote:  !     Push failed
remote: Verifying deploy...
remote: 
remote: !	Push rejected to secret-sierra-30985.
remote: 
To https://git.heroku.com/secret-sierra-30985.git
 ! [remote rejected] master -> master (pre-receive hook declined)
error: failed to push some refs to 'https://git.heroku.com/secret-sierra-30985.git'
arefin@arefin-HP-ProBook-450-G0:~/Programs/file_upload/express-gen$ ls
app.js  bin  index.html  package.json  package-lock.json  public  readme_dir_arefin  routes  views  yarn.lock
arefin@arefin-HP-ProBook-450-G0:~/Programs/file_upload/express-gen$ rm -rf package
arefin@arefin-HP-ProBook-450-G0:~/Programs/file_upload/express-gen$ git status
On branch master
nothing to commit, working tree clean
arefin@arefin-HP-ProBook-450-G0:~/Programs/file_upload/express-gen$ ls
app.js  bin  index.html  package.json  package-lock.json  public  readme_dir_arefin  routes  views  yarn.lock
arefin@arefin-HP-ProBook-450-G0:~/Programs/file_upload/express-gen$ rm -rf package-lock.json 
arefin@arefin-HP-ProBook-450-G0:~/Programs/file_upload/express-gen$ git push heroku master
Enumerating objects: 1254, done.
Counting objects: 100% (1254/1254), done.
Delta compression using up to 4 threads
Compressing objects: 100% (1173/1173), done.
Writing objects: 100% (1254/1254), 12.41 MiB | 223.00 KiB/s, done.
Total 1254 (delta 212), reused 0 (delta 0)
remote: Compressing source files... done.
remote: Building source:
remote: 
remote: -----> Building on the Heroku-20 stack
remote: -----> Determining which buildpack to use for this app
remote: -----> Node.js app detected
remote: 
remote: -----> Build failed
remote:  !     Two different lockfiles found: package-lock.json and yarn.lock
remote: 
remote:        Both npm and yarn have created lockfiles for this application,
remote:        but only one can be used to install dependencies. Installing
remote:        dependencies using the wrong package manager can result in missing
remote:        packages or subtle bugs in production.
remote: 
remote:        - To use npm to install your application's dependencies please delete
remote:          the yarn.lock file.
remote: 
remote:          $ git rm yarn.lock
remote: 
remote:        - To use yarn to install your application's dependencies please delete
remote:          the package-lock.json file.
remote: 
remote:          $ git rm package-lock.json
remote:     
remote:        https://help.heroku.com/0KU2EM53
remote: 
remote:  !     Push rejected, failed to compile Node.js app.
remote: 
remote:  !     Push failed
remote:  !
remote:  ! ## Warning - The same version of this code has already been built: 70cb55908888267c2bc0bce05f520d51c6ce4f8a
remote:  !
remote:  ! We have detected that you have triggered a build from source code with version 70cb55908888267c2bc0bce05f520d51c6ce4f8a
remote:  ! at least twice. One common cause of this behavior is attempting to deploy code from a different branch.
remote:  !
remote:  ! If you are developing on a branch and deploying via git you must run:
remote:  !
remote:  !     git push heroku <branchname>:main
remote:  !
remote:  ! This article goes into details on the behavior:
remote:  !   https://devcenter.heroku.com/articles/duplicate-build-version
remote: 
remote: Verifying deploy...
remote: 
remote: !	Push rejected to secret-sierra-30985.
remote: 
To https://git.heroku.com/secret-sierra-30985.git
 ! [remote rejected] master -> master (pre-receive hook declined)
error: failed to push some refs to 'https://git.heroku.com/secret-sierra-30985.git'
arefin@arefin-HP-ProBook-450-G0:~/Programs/file_upload/express-gen$ git status
On branch master
Changes not staged for commit:
  (use "git add/rm <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
	deleted:    routes/files/aDJueuXX
	deleted:    routes/files/uT9R6YF2
	deleted:    routes/files/vah4xYBt

no changes added to commit (use "git add" and/or "git commit -a")
arefin@arefin-HP-ProBook-450-G0:~/Programs/file_upload/express-gen$ git add --all
arefin@arefin-HP-ProBook-450-G0:~/Programs/file_upload/express-gen$ git commit -m "some files images deleted"
[master ef65362] some files images deleted
 3 files changed, 0 insertions(+), 0 deletions(-)
 delete mode 100644 routes/files/aDJueuXX
 delete mode 100644 routes/files/uT9R6YF2
 delete mode 100644 routes/files/vah4xYBt
arefin@arefin-HP-ProBook-450-G0:~/Programs/file_upload/express-gen$ git branch
  05_xyz
* master
  tmp
arefin@arefin-HP-ProBook-450-G0:~/Programs/file_upload/express-gen$ git push heroku master
Enumerating objects: 1259, done.
Counting objects: 100% (1259/1259), done.
Delta compression using up to 4 threads
Compressing objects: 100% (1178/1178), done.
Writing objects: 100% (1259/1259), 12.41 MiB | 350.00 KiB/s, done.
Total 1259 (delta 216), reused 0 (delta 0)
remote: Compressing source files... done.
remote: Building source:
remote: 
remote: -----> Building on the Heroku-20 stack
remote: -----> Determining which buildpack to use for this app
remote: -----> Node.js app detected
remote:        
remote: -----> Creating runtime environment
remote:        
remote:        NPM_CONFIG_LOGLEVEL=error
remote:        USE_YARN_CACHE=true
remote:        NODE_VERBOSE=false
remote:        NODE_ENV=production
remote:        NODE_MODULES_CACHE=true
remote:        
remote: -----> Installing binaries
remote:        engines.node (package.json):  unspecified
remote:        engines.npm (package.json):   unspecified (use default)
remote:        engines.yarn (package.json):  unspecified (use default)
remote:        
remote:        Resolving node version 14.x...
remote:        Downloading and installing node 14.17.6...
remote:        Using default npm version: 6.14.15
remote:        Resolving yarn version 1.22.x...
remote:        Downloading and installing yarn (1.22.11)
remote:        Installed yarn 1.22.11
remote:        
remote: -----> Installing dependencies
remote:        Installing node modules (yarn.lock)
remote:        yarn install v1.22.11
remote:        [1/4] Resolving packages...
remote:        [2/4] Fetching packages...
remote:        [3/4] Linking dependencies...
remote:        [4/4] Building fresh packages...
remote:        Done in 3.25s.
remote:        
remote: -----> Build
remote:        
remote: -----> Pruning devDependencies
remote:        yarn install v1.22.11
remote:        [1/4] Resolving packages...
remote:        [2/4] Fetching packages...
remote:        [3/4] Linking dependencies...
remote:        [4/4] Building fresh packages...
remote:        warning Ignored scripts due to flag.
remote:        Done in 0.72s.
remote:        
remote: -----> Caching build
remote:        - yarn cache
remote:        
remote: -----> Build succeeded!
remote: -----> Discovering process types
remote:        Procfile declares types     -> (none)
remote:        Default types for buildpack -> web
remote: 
remote: -----> Compressing...
remote:        Done: 36.6M
remote: -----> Launching...
remote:        Released v3
remote:        https://secret-sierra-30985.herokuapp.com/ deployed to Heroku
remote: 
remote: Verifying deploy... done.
To https://git.heroku.com/secret-sierra-30985.git
 * [new branch]      master -> master
arefin@arefin-HP-ProBook-450-G0:~/Programs/file_upload/express-gen$ heroku ps:scale web=1
Scaling dynos... done, now running web at 1:Free
arefin@arefin-HP-ProBook-450-G0:~/Programs/file_upload/express-gen$ heroku open
arefin@arefin-HP-ProBook-450-G0:~/Programs/file_upload/express-gen$ heroku logs --tail
2021-09-20T04:08:03.369190+00:00 app[api]: Initial release by user mhmdarefin@gmail.com
2021-09-20T04:08:03.369190+00:00 app[api]: Release v1 created by user mhmdarefin@gmail.com
2021-09-20T04:08:03.516902+00:00 app[api]: Release v2 created by user mhmdarefin@gmail.com
2021-09-20T04:08:03.516902+00:00 app[api]: Enable Logplex by user mhmdarefin@gmail.com
2021-09-20T04:11:04.000000+00:00 app[api]: Build started by user mhmdarefin@gmail.com
2021-09-20T04:11:06.000000+00:00 app[api]: Build failed -- check your build output: https://dashboard.heroku.com/apps/3bbfc9ed-71cc-46ff-afee-368b04fcfcdb/activity/builds/ed03a52a-8db9-478b-add5-8d6bae236945
2021-09-20T04:13:47.000000+00:00 app[api]: Build started by user mhmdarefin@gmail.com
2021-09-20T04:13:50.000000+00:00 app[api]: Build failed -- check your build output: https://dashboard.heroku.com/apps/3bbfc9ed-71cc-46ff-afee-368b04fcfcdb/activity/builds/09d72297-cac5-4a2d-97f8-09e62f1df116
2021-09-20T04:14:59.000000+00:00 app[api]: Build started by user mhmdarefin@gmail.com
2021-09-20T04:15:17.388685+00:00 app[api]: Release v3 created by user mhmdarefin@gmail.com
2021-09-20T04:15:17.388685+00:00 app[api]: Deploy ef65362e by user mhmdarefin@gmail.com
2021-09-20T04:15:17.404664+00:00 app[api]: Scaled to web@1:Free by user mhmdarefin@gmail.com
2021-09-20T04:15:18.000000+00:00 app[api]: Build succeeded
2021-09-20T04:15:19.727447+00:00 heroku[web.1]: Starting process with command `npm start`
2021-09-20T04:15:20.869150+00:00 app[web.1]: 
2021-09-20T04:15:20.869165+00:00 app[web.1]: > express-gen@0.0.0 start /app
2021-09-20T04:15:20.869165+00:00 app[web.1]: > node ./bin/www
2021-09-20T04:15:20.869165+00:00 app[web.1]: 
2021-09-20T04:15:21.509832+00:00 heroku[web.1]: State changed from starting to up
2021-09-20T04:16:22.083380+00:00 app[web.1]: GET / 200 10.093 ms - 272
2021-09-20T04:16:22.083419+00:00 heroku[router]: at=info method=GET path="/" host=secret-sierra-30985.herokuapp.com request_id=21e40820-18a1-4fb6-8b3c-0c1c7a16f4b9 fwd="103.152.103.78" dyno=web.1 connect=0ms service=15ms status=200 bytes=670 protocol=https
2021-09-20T04:16:22.557622+00:00 app[web.1]: GET /favicon.ico 404 149.224 ms - 160
2021-09-20T04:16:22.558868+00:00 heroku[router]: at=info method=GET path="/favicon.ico" host=secret-sierra-30985.herokuapp.com request_id=de49c327-7389-4226-a909-ab0c3dc9e81b fwd="103.152.103.78" dyno=web.1 connect=0ms service=150ms status=404 bytes=478 protocol=https
2021-09-20T04:16:39.645060+00:00 app[web.1]: POST /upload 500 7299.972 ms - 107
2021-09-20T04:16:39.646123+00:00 heroku[router]: at=info method=POST path="/upload" host=secret-sierra-30985.herokuapp.com request_id=ee344797-cb5a-4014-9504-1b6888eb957e fwd="103.152.103.78" dyno=web.1 connect=0ms service=7301ms status=500 bytes=444 protocol=https
2021-09-20T04:17:03.755929+00:00 app[web.1]: GET /upload/routes/files/Screenshot_2021-09-19_12-07-21.png 404 0.816 ms - 160
2021-09-20T04:17:03.757392+00:00 heroku[router]: at=info method=GET path="/upload/routes/files/Screenshot_2021-09-19_12-07-21.png" host=secret-sierra-30985.herokuapp.com request_id=ff230022-e194-4729-bbc4-194446b08df1 fwd="103.152.103.78" dyno=web.1 connect=0ms service=2ms status=404 bytes=478 protocol=https
2021-09-20T04:17:04.942242+00:00 app[web.1]: GET /stylesheets/style.css 200 0.808 ms - 111
2021-09-20T04:17:04.943606+00:00 heroku[router]: at=info method=GET path="/stylesheets/style.css" host=secret-sierra-30985.herokuapp.com request_id=79b9c50c-1d5f-4e0f-91ba-17f6fc5b5d8a fwd="103.152.103.78" dyno=web.1 connect=0ms service=2ms status=200 bytes=397 protocol=https
2021-09-20T04:17:33.950102+00:00 app[web.1]: GET /routes/files/Screenshot_2021-09-19_12-07-21.png 404 0.834 ms - 160
2021-09-20T04:17:33.951572+00:00 heroku[router]: at=info method=GET path="/routes/files/Screenshot_2021-09-19_12-07-21.png" host=secret-sierra-30985.herokuapp.com request_id=29d2ae0a-11de-4766-b6e3-698a9cdf2f71 fwd="103.152.103.78" dyno=web.1 connect=0ms service=2ms status=404 bytes=478 protocol=https
2021-09-20T04:17:34.915605+00:00 app[web.1]: GET /stylesheets/style.css 304 1.011 ms - -
2021-09-20T04:17:34.916846+00:00 heroku[router]: at=info method=GET path="/stylesheets/style.css" host=secret-sierra-30985.herokuapp.com request_id=864785f4-c39c-4067-9975-99690b23a091 fwd="103.152.103.78" dyno=web.1 connect=0ms service=2ms status=304 bytes=236 protocol=https
2021-09-20T04:17:56.238880+00:00 app[web.1]: GET /routes/files/ 404 0.875 ms - 160
2021-09-20T04:17:56.240872+00:00 heroku[router]: at=info method=GET path="/routes/files/" host=secret-sierra-30985.herokuapp.com request_id=fbb710ae-24d2-4f3b-b270-581e0c448068 fwd="103.152.103.78" dyno=web.1 connect=0ms service=5ms status=404 bytes=478 protocol=https
2021-09-20T04:17:57.014679+00:00 app[web.1]: GET /stylesheets/style.css 304 0.379 ms - -
2021-09-20T04:17:57.016107+00:00 heroku[router]: at=info method=GET path="/stylesheets/style.css" host=secret-sierra-30985.herokuapp.com request_id=6fcf8289-2b52-4259-ad82-db66b1d38e04 fwd="103.152.103.78" dyno=web.1 connect=0ms service=1ms status=304 bytes=236 protocol=https
2021-09-20T04:19:25.389921+00:00 app[web.1]: GET / 304 0.835 ms - -
2021-09-20T04:19:25.391194+00:00 heroku[router]: at=info method=GET path="/" host=secret-sierra-30985.herokuapp.com request_id=0ffcb5e9-5c51-4c2b-be7e-67890fab2fde fwd="103.152.103.77" dyno=web.1 connect=0ms service=2ms status=304 bytes=347 protocol=https
^C
arefin@arefin-HP-ProBook-450-G0:~/Programs/file_upload/express-gen$ ^C
arefin@arefin-HP-ProBook-450-G0:~/Programs/file_upload/express-gen$ ^C
arefin@arefin-HP-ProBook-450-G0:~/Programs/file_upload/express-gen$ ^C
arefin@arefin-HP-ProBook-450-G0:~/Programs/file_upload/express-gen$ heroku ps
Free dyno hours quota remaining this month: 550h 0m (100%)
Free dyno usage for this app: 0h 0m (0%)
For more information on dyno sleeping and how to upgrade, see:
https://devcenter.heroku.com/articles/dyno-sleeping

=== web (Free): npm start (1)
web.1: up 2021/09/20 10:15:21 +0600 (~ 7m ago)

arefin@arefin-HP-ProBook-450-G0:~/Programs/file_upload/express-gen$ heroku local web
10:23:22 AM web.1 |  yarn run v1.22.5
10:23:22 AM web.1 |  $ DEBUG=express-gen:* npm start
10:23:22 AM web.1 |  > express-gen@0.0.0 start
10:23:22 AM web.1 |  > node ./bin/www
10:23:22 AM web.1 |  node:internal/modules/cjs/loader:936
10:23:22 AM web.1 |    throw err;
10:23:22 AM web.1 |    ^
10:23:22 AM web.1 |  Error: Cannot find module 'http-errors'
10:23:22 AM web.1 |  Require stack:
10:23:22 AM web.1 |  - /home/arefin/Programs/file_upload/express-gen/app.js
10:23:22 AM web.1 |  - /home/arefin/Programs/file_upload/express-gen/bin/www
10:23:22 AM web.1 |      at Function.Module._resolveFilename (node:internal/modules/cjs/loader:933:15)
10:23:22 AM web.1 |      at Function.Module._load (node:internal/modules/cjs/loader:778:27)
10:23:22 AM web.1 |      at Module.require (node:internal/modules/cjs/loader:1005:19)
10:23:22 AM web.1 |      at require (node:internal/modules/cjs/helpers:94:18)
10:23:22 AM web.1 |      at Object.<anonymous> (/home/arefin/Programs/file_upload/express-gen/app.js:1:19)
10:23:22 AM web.1 |      at Module._compile (node:internal/modules/cjs/loader:1101:14)
10:23:22 AM web.1 |      at Object.Module._extensions..js (node:internal/modules/cjs/loader:1153:10)
10:23:22 AM web.1 |      at Module.load (node:internal/modules/cjs/loader:981:32)
10:23:22 AM web.1 |      at Function.Module._load (node:internal/modules/cjs/loader:822:12)
10:23:22 AM web.1 |      at Module.require (node:internal/modules/cjs/loader:1005:19) {
10:23:22 AM web.1 |    code: 'MODULE_NOT_FOUND',
10:23:22 AM web.1 |    requireStack: [
10:23:22 AM web.1 |      '/home/arefin/Programs/file_upload/express-gen/app.js',
10:23:22 AM web.1 |      '/home/arefin/Programs/file_upload/express-gen/bin/www'
10:23:22 AM web.1 |    ]
10:23:22 AM web.1 |  }
10:23:22 AM web.1 |  error Command failed with exit code 1.
10:23:22 AM web.1 |  info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
[DONE] Killing all processes with signal  SIGINT
10:23:22 AM web.1 Exited with exit code null
arefin@arefin-HP-ProBook-450-G0:~/Programs/file_upload/express-gen$ yarn
yarn install v1.22.5
[1/4] Resolving packages...
[2/4] Fetching packages...
[3/4] Linking dependencies...
[4/4] Building fresh packages...
Done in 1.24s.
arefin@arefin-HP-ProBook-450-G0:~/Programs/file_upload/express-gen$ heroku local web
10:23:40 AM web.1 |  yarn run v1.22.5
10:23:40 AM web.1 |  $ DEBUG=express-gen:* npm start
10:23:40 AM web.1 |  > express-gen@0.0.0 start
10:23:40 AM web.1 |  > node ./bin/www
10:23:40 AM web.1 |  Mon, 20 Sep 2021 04:23:40 GMT express-gen:server Listening on port 5000
10:24:00 AM web.1 |  GET / 200 11.238 ms - 272
10:24:00 AM web.1 |  GET /favicon.ico 404 204.715 ms - 1218
10:24:04 AM web.1 |  POST /upload 200 40.693 ms - 97
10:24:19 AM web.1 |  GET /routes/files/08__.png 404 25.129 ms - 1218
10:24:19 AM web.1 |  GET /stylesheets/style.css 200 2.736 ms - 111



```
