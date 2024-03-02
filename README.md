# Creative Coding Template
File template for creative coding, with focus on p5.js.

## Imitate, Integrate, Innovate
In general, we will be using an "imitate, integrate, and innovate" design process to understand and creatively extend new code:

Together, these three steps represent a process of starting with existing coding techniques and strategies, building upon them by combining them with other elements, and ultimately introducing new or original ideas to create something innovative. By following this process, we can learn, integrate, and extend new coding techniques and strategies in a way that is both grounded in proven concepts and pushing the boundaries of what is possible.

### Imitate
To develop artistic creativity in coding, it can be helpful to start by studying and learning from existing examples. This might involve reviewing code written by others, analyzing successful techniques, or even copying and modifying code to better understand how it works. By imitating and learning from existing techniques and strategies, we can gain a better understanding of what has been done before and what is possible, and identify opportunities for improvement and innovation.

Pick one or more of the examples I've provided and get it working for yourself. Change whatever you need to get it working.

Document this process by saving screenshots of steps in the process.

### Integrate
After learning from existing techniques and strategies, we can build upon that foundation by combining elements from different sources. This might involve combining elements from different programming languages, using libraries or frameworks in new ways, or bringing together techniques from different fields or disciplines. By integrating and combining elements from different sources, we can create something new and unique.

Extend the code or combine with another technique to make something new.

Document this process by saving screenshots or taking code snapshots at various steps in this process. 

### Innovate
Finally, we can introduce new or original ideas to our coding process by thinking creatively and pushing the boundaries. This might involve developing entirely new techniques or approaches, or using existing techniques in new and creative ways. By innovating and introducing new ideas, we can create art that is truly groundbreaking.

Use the code as a jumping off point to create something truly unique and novel.

Document this process at various steps in the process.

### Reflect
Each person that worked on the code should reflect on the process, the difficulties, and the successes of the experiment. Include:

* What part of the project you contributed
* A reflection on your work and and the work of the team
* Brief highs and lows

The reflection portion of each lab will be an important part of the assignment where you tell about your experience performing the experiment, describe any problems you had, solutions you developed, and epiphanies you experienced.

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