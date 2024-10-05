[TOC]

# THE 72H APPLICATION FOR DEVELOPER POSITION #

Hello dear candidate. Please follow the instructions below to provide all the information for your hiring process. Good luck !  

## **1 -  What is this test for ?** ##

This test aims to look a developer to join us with some technical/personal skills, like: 
 
*  be able to find out solutions googling     
*  work with core technologies used by our company (Java, [grails](https://docs.grails.org/4.0.1/guide/index.html), [angular](https://angular.io/), git ...)   
*  follow processes   

## **2 -  How do I get set up?** ##

*  1 - Setup your environment with **Java SDK 11.x**, [LTS **Node.js 20.XX** version](https://nodejs.org/en/download/), **[Grails 4.x](https://grails.org/download.html)**   
*  2 - Create an account on [BitBucket](https://bitbucket.org/) or [GitHub](https://github.com/) if you don't have one. It's free and you'll use to submit your test to us.
 
  
You will find this structure:


```

/backend  
/frontend  
```
We have two projects: a Grails project and an Angular project. The first one is our *backend* and the another one, the *frontend*.

Inside the grails project directory (/backend), run:

```

grails run-app
```
to check if the things are ok.  
In the angular project directory (/frontend), run:

```

npm i
```
to finish your setup, then execute

```

ng serve
```
 to see the project running.


## **3 - INSTRUCTIONS** ##

This test contains **4 tasks** described below. Create a **public** project on your Bitbucket(or GitHub) account named **<your name>_TEST_DEV_1**, **push** your work to the **master** branch, and send a mail to **daniel@metryx.com.br** with:

*  the subject: **"Submitting for DEV-1"**
*  a link to your project on Bitbucket (or GitHub)

### **3.1 - TASK 1** ###

Good news ! The first task was just your environment setup. So, probably at this time you already done that. Congrats ! Let's go to the next one.

### **3.2 - TASK 2** ###

This first task it's totally to be performed on the backend:

[Create](https://docs.grails.org/4.0.1/ref/Command%20Line/create-domain-class.html) the DOMAIN class on the way you want to represent:  

*  A **Company** (with **name** and **segment**). For example, *FORD*, segment: *vehicles*.

Then, **Bootstrap** ([see 5.4 section](https://guides.grails.org/creating-your-first-grails-app/guide/index.html)) your application with some fake data containing:  

*  three companies;  

Finally, create a [Grails Service](https://docs.grails.org/4.0.1/ref/Command%20Line/create-service.html) with one method: *getCompanies()*. This method should list all componies.


### **3.3 - TASK 3** ###

Now, on the Angular project, just create a button called "GET COMPANIES" which shows the companies you've bootstrapped in the backend. For each company shows:  

*  Name
*  Segment

**Do not worry** about design or making it beautiful! However, take attention for the good practices (use a service in Angular to accommodate your communication logic with the backend, instead of calling direct from the Controller).

**TIP**: for achieve this you'll need to create a [Controller](https://docs.grails.org/4.0.1/guide/theWebLayer.html#controllers) in your backend, and call it from the frontend using a [http](https://angular.io/guide/http) request. Your controller can handle the response as a JSON...

### **3.4 - TASK 4** ###

You are almost there. Now you need to show that you know how to work with javascript objects (JSON):

* Create a input field that filters the companies by name or segment.


## **Done !** ##
Thank you for your time !
**Don't forget** to PUSH all your work into the repository you created, on branch MASTER, and send the mail with the link when you are done !

Best regards and good luck !