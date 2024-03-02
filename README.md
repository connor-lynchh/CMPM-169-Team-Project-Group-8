# Creative Coding Template
Brendan's idea of how this will look
start at Homepage
Homepage describes company, job, or whatever
Homepage can go to blog x, blog y, blog z
blog x/y/z can go to Homepage
maybe play around with simple javascript to check off something to say that you read it


## InstallFest

### Install Visual Studio Code

VSCode is a text editor that allows you to edit plain text and conveniently highlights the context of your code and can even show you when you've made obvious errors. It is easy to configure the color and theme, very extensible, and compatible with github.

[Download and Install VSCode Text Editor](https://code.visualstudio.com/download).

Here are some useful extensions I suggest:

* open in browser
* GitHub Repositories
* Live Share
* Live Share Audio
* GitHub Copilot (though you will have to register as a student at github)

### Install Github Desktop

We will be using GitHub to push the websites you create to a server where they can be seen on the internet. GitHub Desktop is software that will help us manage our code.

[Download and Install GitHub Desktop](https://desktop.github.com/).

Next you'll create a place to put your code and learn how to publish your website. Carefully follow the instructions here...

### Create Class File Repo From a Template

Good file structure is very important in web development. I have created a template for you to use so your files will all be in the right place. 

1. Go to my Lab File Structure Repository Template. Click the button at the top right labeled Use This Template.
2. Name your new repo, and an optional description.
3. Click **Create repository** from template.
4. GitHub will take you to your newly created repo.

### Clone Repo to Local Machine

This creates an online repo. Now you have to clone to your local machine.

1. From your newly created course repo, click the button in the upper right that says **Code**.
2. From the popup that opens, click **Open With GitHub Desktop**
3. GitHub Desktop should open with a window asking you where on your local computer you would like to clone the repo.
4. Under the field "Local Path", specify where you want your files to be stored. I recommend putting the repo in a **dev** folder in your home directory.
5. Click **Clone**.

This will copy the entire repo including all of the files and folders in my template to your computer. Now when you update those files locally, the changes will show up in GitHub Desktop.

### Configure GitHub Pages for the Web

Now, go back to your cmpm169 repo on github.com. You are going to configure your repo so that the files can be seen as a website.

1. Click **Settings** on the horizontal menu of your repo.
2. On the left menu, click **GitHub Pages**.
3. Under **Source**, you will see a dropdown that defaults to **None**. Change that to **Master**.
4. Click the **Save** button in the same section
5. Wait a minute. Reload the page, and you will see a link to your website.
6. Click it and then bookmark that link. Seriously, bookmark that. Every term I have students saying they can't find their website. Don't be that guy.

## Basic Structure
Here is the basic structure with stub or empty files in place.

```
.
├── index.html
├── css
│   ├── homepage.css
│   └── site.css
├── img
│   └── cute-grey-kitten.jpg
├── js
│   └── site.js
├── experiment1
│   ├── css
│   │   └── style.css
│   ├── img
│   ├── js
│   │   ├── project.js
│   │   └── sketch.js
│   └── index.html
├── experiment2
│   ├── css
│   │   └── style.css
│   ├── img
│   ├── js
│   │   ├── project.js
│   │   └── sketch.js
│   └── index.html
├── experiment3
│   ├── css
│   │   └── style.css
│   ├── img
│   ├── js
│   │   ├── project.js
│   │   └── sketch.js
│   └── index.html
├── experiment4
│   ├── css
│   │   └── style.css
│   ├── img
│   ├── js
│   │   ├── project.js
│   │   └── sketch.js
│   └── index.html
├── experiment5
│   ├── css
│   │   └── style.css
│   ├── img
│   ├── js
│   │   ├── project.js
│   │   └── sketch.js
│   └── index.html
├── experiment6
│   ├── css
│   │   └── style.css
│   ├── img
│   ├── js
│   │   ├── project.js
│   │   └── sketch.js
│   └── index.html
└── README.md
```