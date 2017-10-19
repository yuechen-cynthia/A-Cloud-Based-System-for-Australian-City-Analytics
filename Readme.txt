System deployment
This project utilizes Ansible as auto-deploy tool. There are several important files for the deployment:
1)	deployment.yml
2)	runhavesters.yml
3)	runanalyses.yml
4)	runwebserver.yml
5)	local.ini
6)	hosts
7)	cloud.key and cloud.key.pub
8)	CollectData (Directory, contains CollectData_Melb_Perth_Ade.jar, CollectData_Sydney_Brisbane.jar, userTimeLine.jar)
9)	Analysis (Directory, contains Analysis_Scenrio1_Scenrio3.jar, Analysis_Scenrio2.jar, SentimentMap.txt)
10)	TwitterView (Directory, contains all the web application files)




To deploy the whole system, follow the instruction below:
1)	Install Ansible in your local machine, with following command: 
$sudo pip install ansible
2)	Configure cloud nodes. Use cloud.key and could.key.pub as ssh key pairs. You can also use the command below to generate a new pair of keys and use them to build cloud nodes. Remember to replace cloud.key and clould.key.pub with the new pair.
$ssh-keygen -t rsa -f cloud.key
3)	Configure safety groups on cloud. Open TCP protocol and port 5984 for the instance with database. Then open TCP and http protocol with port 8000 of web server instance. 
4)	Change the mode of cloud.key in local machine
$sudo chmod 600 cloud.key
5)	Edit /etc/ansible/hosts according to the hosts file here. Add IP addresses into the file at appropriate place, according to the function of every cloud node. 
6)	Open Terminal, use ansible :
$ansible-playbook deployment.yml 每private-key=cloud.key


After the deployment, to start harvester application, user need to edit runharvesters.yml file first. User need to put database address and port in to right place, as mentioned in the file. Then use next command:
$ansible-playbook runharvesters.yml 每private-key=cloud.key


Once user is satisfactory with the data scale, analyses application can be started. User need to edit runharvesters.yml file first. User need to edit runanalyses.yml file first. Put database address and port in to right place, as mentioned in the file. Then use next command:
$ansible-playbook runanalyses.yml 每private-key=cloud.key


Once analyses application is finished, web server application can be started. Use next command:
$ansible-playbook runwebserver.yml 每private-key=cloud.key
