Application name: TODO app

Made by: Mahesh Mehandiratta
Employee code: 3146489

Features built:
1. Display TODOs category wise
2. Refreshing TODOs
3. Option to add new TODO
4. Dynamic refreshing of page using AJAX
5. Hide/Unhide Completed section
6. Hide/Unhide Deleted section
7. Manage active, completed and deleted TODOs using checkbox and delete button
8. All other features mentioned are covered too.

Features not-built: None
Issues: None


IMPLEMENTATION DETAILS:

A. Structure of the app

       app
            node_modules
                    ...
            public
                    index.html
                    script.js
                    style.css
            screenshots
                    Capture1.png
                    Capture2-Adding todo.png
                    Capture3-Added todo.png
                    Capture4-Complete and delete functionality.png
                    Capture5-Deleted section hidden.png
                    Capture6-Completed section hidden.png
            index.js
            package.json
            readme.md
            seed.js

B. USE OF DIFFERENT FILES

    index.html
        It is the main html file that gets displayed in the browser. It uses style.css, bootstrap and a
        css from cloudflare.com to provide diferent styles.
    script.js
        This is the main JS file which is the heart of the complete app. It handles various DOM manipul-
        ations.
    style.css
        This is the stylesheet that is used for all the styling in the application
    index.js
        This is the server file where the server is made on port 4000 and various APIs are called based
        on type of request received and data is sent back.
    package.json
        This file contains project specific information like modules used.
    readme.md
        You're reading this file right now. It is the documentation of the complete project;
    seed.js
        This file is run when the server runs for the first time to seed some data to show in the browser.
        It also acts as a virtual database for storing changes in data.