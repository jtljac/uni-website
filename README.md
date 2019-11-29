Instructions to join:

create an account here: https://github.com/join

Post your username in the group chat so you can be added as a collaborator

install git from here: https://git-scm.com/downloads

if you're feeling adventurous, gitkraken gives you a simple gui, you can get that aswell: https://www.gitkraken.com/

right click in your documents and click "Open git bash" (or run git bash from your start menu and navigate to your documents)

enter the command: 

git clone https://github.com/jtljac/uni-website.git 

to download the project

navigate to ./uni-website using cd in the git bash (or close git bash, open the newly created folder in your documents, right click and click open git bash)

the project is in there, you can make edit, and add files. when you have finished editing it, open git bash in that directory and type:

git commit -a -m "A message"

(make sure you replace the message with a relevent message describing your edit (make sure you include the quotation marks))

Then enter:

git push

to send the edits to github for everyone else to access

when you load the project back up, get the latest changes by opening git bash in that directory, and enter:

git pull

which will get all the changes for you

If you get a complaint when you try to push, try pulling first, someone else might have made a change meaning you're a commit behind, if you get any further errors, just tell Jacob
