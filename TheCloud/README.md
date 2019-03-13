# Deploying Applications to AWS 

Before we begin, we need to know what AWS actually gives us. AWS is Amazon Web Services which is a Cloud Service Provider that provides tools for developers to build highly scalable, available, and customer driven applications. AWS becomes tryuly ground breaking in the IT space because when we buy from AWS, we only pay for the products that we need. 

Prior to such a service, we would need an "on-premise" server that would run our application. It would run in some IT closet with the door locked, and if we were lucky, it even had its own cooling system. If we got a bigger, and had to allocate for more customers, we would have to go, buy new machines, hook them up to our server and then allow more traffic. Not only is this costly, but it's slow and cat videos are important. 

### What is the Cloud?

While there are several definitons of such a service, the best one I have heard is:

BLOKQUOTE
The cloud is short for someone elses computer
BLOCKQUOTE

while the dfinition neglects any sort of real technocal talk, its true. This lab will go and use big words like virtual machine, security group, SSH and keys, but at the 30,000 foot view, we are buying a machine in Northern Virginia and provisioning it the way we want. Somewhere in Virginia sits a virtual machine that is just waiting for us to show it an express app, and when we are done, we just terminate it. No returns needed. 

## What we are doing today
Today we are deploying a Node App to a virtual machine on AWS. We will start this machine from complete scratch, install everything we need to run our app and then run it. 

## The bachground
So far we have been creating applications using NodeJS and deplyoing them to heorku. Three commands later, we have an app running on the world wide web, but how does it work?

When you run Node on your computer, you are running a type of server (the V8 engine to be exact). That server is build to take JavaScript, read it and interpret the code and do whatever our beautiful algorithms tell it to do. 

When we build an EXPRESS app, we are implementing a Node Package that has written a bunch of logic behind the scenes to use Node's native HTTP server, but in a much nicer, legible and clean way.

When we run node on our computer with expres, Node's web server opens up the specified port on our computer and uses the loopback address, localhost or 127.0.0.1:3000 to allow the server to run, while also letting us communicate back to the server.

You see; localhost:3000
The computer sees: 127.0.0.1:3000
The world sees: YOUR_IP_ADDRESS:3000*

*if you are connected to the internet

PEOPLE HAVE MY IP ADDRES!?!?!? WHAAAAAT

For you to be able to use the internet, you have to have a specific address that allows a router or tower to communicate to your computer somehow. This is known as the IP address. Want to seek revenge? Run the following command in your terminal.

```
ping www.google.com
```
Just below your results, you will see Googl's IP address. WHO'S LAUGHING NOW?!?!

The reason why we do not immediately need to start memorizing these different IP addresses, is through the wonderful world od Domain Name Services or DNS. DNS allows us to just type in www.google.com and DNS will do the translating for us. Through a series of hops (which also contain IP addresses), we will be able to connect to www.google.com

BLOCKQUOTE the inernet is a series of tubes BLOCKQUOTE

We are going to create something very similar (although Google was built over the course of 5 years and then 25 after its deployment in ___________ )

Without further cliches, lets get to it. 


## Key words
Virtual Machine - a light weight computer with an instance of an operating system that sists independently from the machine that the program is being developped on. 

Securtiy Group - the port settings that define which ports on our virtual machine are open, what protocol they will serve and what number they are.

SSH - a communication protocol that relies on keys to create a communication platform from one computer to another (We have seen a similar technology with GitHub).

Linux - the operating system of choice for deployment. Linux has many types of distributions, but some of its best sit within the server space. 

Git - a version control framework used to create version control and a source of download for software applications.

AMI - Amazon Machine Image is a packaged operating system and services that we can use so that when we need more machines, we do not have to build them all from scratch, we build them with the AMI.

# The Beginning

By the time you read this, please make sure you have an AWS account. If you do not have one, please create one now: 

1. Login to your AWS account.
2. At the top left hand page of the AWS Management Console, click on Services and then search EC2.
3. This brings us to an empty page, which should say somewhere launch instance.
4. Select the Amazon Linux 2 AMI and click next.
5. Select the t2.Micro and click next.


FOR MY WINDOWS PEOPLE

1. Download PuTTy. Putty is what will take the key we downloaed from Amazon, decrypt it and write it the away the AMI wants you to use it. 
2. Open PuttyGen 
3. Load > Name_Of_The_Key.pem
4. Generate
5. Save as Private key
6. Save as the same name.ppk (Explorer should do this for you).
7. Open Putty
8. Take the DNS name from AWS and paste it within host name, keep port 22 (this is the port we have open to SSH on our VM)
9. On the left menu, select > session > auth > Browse.
10. Find the PPK file we just made.
11. GO back to session. You will see "Default Name"
12. Above "Default Name" There is a box, go ahead and put a name in there. This will be the name of your connection to your EC2 running on AWS.
13. Click Save.
14. Highlight the newly named connection.
15. Click open.
16. If this step goes as planned you should see something like this: 
17. Welcome to the machine.

FOR MY MAC PEOPLE
1. Within your terminal, change directory into your Downloads folder (or whereever you saved the PEM key to).
2. Run the following:
```
chmod 400 name_of_key.pem
```
This is changing access permissions for the key.

3. If done successfully, the output should look like this:
```
ls -alt name_of_key.pem
```
4. Within the AWS console, highlight the EC2 instance thar we created and click connect
5. At the bottom of the dialogue box, there is a command that looks similar to this:
```
ssh -i "key" ec2-user@nameofinstance.IPAddress.aws.amazon.com
```

5. Copy and past that into the terminal session.
6. The terminal will ask you (politely) if you wish to trust this host you are connecting to. Answer yes. 
7. A successfull connection looks like this:
8. Welcome to the machine.

### Getting the App
So far to take down apps from Github, we have ben running GitClone. This then take everything within the source folder and allows us to run it on our machine. What if we could do the same thing, but virtually?

Go ahead and clone this app (or one you have that atleast has express and a few routes) into the EC2 you are now connected to.

Git will clone down the repository.

cd into that directory.
within that directory run `node server.js`

Open up that long DNS address in a browser.

Hmm...nothing?

#### Why why why?
The DNS name naturally will go to the EC2 within AWS. The problem is, we gave it a name, we did not give it a port. It works the same way if you were to take my IP address and try to connec to it, it would go, it woud fine it, but never get a response.

Remmeber we opened port 3000 in the security group , and we have our node app listeneing on port 3000? What if we tried this: 
```
localhost:3000
```
Ta Da! A node app working on a virtual machine, in the cloud. Whaaaaaaaaaat


**Further Reading**

