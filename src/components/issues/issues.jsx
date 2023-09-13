  import React, { useState } from "react";
  import "./issues.css";

  const Services = () => {
    const [toggleState, setToggleState] = useState(0);

    const toggleTab = (index) => {
      setToggleState(index);
    };

    return (
      <section className="services section" id="services">
        <h2 className="section__title">Issues</h2>
        <span className="section__subtitle">Security Oversight</span>

        <div className="services__container container grid">
          <div className="services__content">
            <div>
              
              <h3 className="services__title">
                SQL Injection & <br /> Cross-site Scripting
              </h3>
            </div>

            <span className="services__button" onClick={() => toggleTab(1)}>
              View More
              <i className="uil uil-arrow-right services__button-icon"></i>
            </span>

            <div
              className={
                toggleState === 1
                  ? "services__modal active-modal"
                  : "services__modal"
              }
            >
              <div className="services__modal-content">
                <i
                  onClick={() => toggleTab(0)}
                  className="uil uil-times services__modal-close"
                ></i>

                <h3 className="services__modal-title">SQL Injection & Cross-site scripting</h3>
                <p className="services__modal-description">
                Cross-site scripting and SQL injection flaws are frequent and can impact practically any Web application. According to CVE, they collectively represent more than a third of all security vulnerabilities revealed in 2008. These flaws arise when user input data enters a SQL query string or an HTML document without first passing through the corresponding sanitization routines. Today, programmers add calls to the appropriate sanitization function on every single path where user input can flow to SQL or HTML in order to avoid these vulnerabilities. Because there are numerous data flow pathways to keep track of and some of them are not intuitive, achieving this in practise is challenging. One cross-site scripting vulnerability, for instance, involved phpBB querying a malicious whois service and directly incorporating the response into HTML without first sanitising it. Cross-site scripting affects more than 31% of apps, and SQL injection affects roughly 8%, according to survey by Mitre Corporation.  
                </p>
              </div>
            </div>
          </div>

          <div className="services__content">
            <div>

              <h3 className="services__title">
                Directory <br /> Traversal
              </h3>
            </div>

            <span onClick={() => toggleTab(2)} className="services__button">
              View More
              <i className="uil uil-arrow-right services__button-icon"></i>
            </span>

            <div
              className={
                toggleState === 2
                  ? "services__modal active-modal"
                  : "services__modal"
              }
            >
              <div className="services__modal-content">
                <i
                  onClick={() => toggleTab(0)}
                  className="uil uil-times services__modal-close"
                ></i>

                <h3 className="services__modal-title">Directory Traversal</h3>
                <p className="services__modal-description">
                Directory traversal represents a significant security issue, accounting for 6.6% of vulnerabilities listed in CVE. In this type of attack, a vulnerable application permits users to input a filename but fails to restrict the directories accessible to them. Exploiting this vulnerability typically involves inserting the ".." string within the filename, allowing the attacker to gain unauthorized access for reading or writing files in the server's file system. These exploits can be thought of as problematic data movements. When the attacker reads a file without the necessary authorization, there is an erroneous transfer of the file's data to the attacker. Similarly, when the attacker writes to a file without proper authorization, it results in an unauthorized data transfer into the file.
                </p>

              
              </div>
            </div>
          </div>

        <div className="services__content">
          <div>
           
            <h3 className="services__title">
              Server-side <br /> script injection
            </h3>
          </div>

          <span onClick={() => toggleTab(3)} className="services__button">
            View More
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>

          <div
            className={
              toggleState === 3
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times services__modal-close"
              ></i>

              <h3 className="services__modal-title">Server-side Script Injection</h3>
              <p className="services__modal-description">
              Server-side script injection represents 5% of the vulnerabilities documented by Mitre Corporation. These vulnerabilities are exploited when an attacker uploads code to the server and manipulates the application into executing that code. For example, numerous PHP applications dynamically load script code for various visual themes based on user-specified file names. An attacker can take advantage of this by uploading a file containing the desired code to the server (as many applications permit the upload of images or attachments) and then providing the filename of that uploaded file as the theme to load. Even if the application takes precautions to avoid including user-supplied filenames, a subtler issue can arise. If an attacker uploads a file with a .php extension, the web server might permit the attacker to directly execute the contents of that file by simply making an HTTP request for it.
              </p>

              
            </div>
          </div>
        </div>

        <div className="services__content">
          <div>
           
            <h3 className="services__title">
              Javascript <br /> Mashups
            </h3>
          </div>

          <span onClick={() => toggleTab(4)} className="services__button">
            View More
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>

          <div
            className={
              toggleState === 4
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times services__modal-close"
              ></i>

              <h3 className="services__modal-title">Javascript Mashup</h3>
              <p className="services__modal-description">
              Mashups, which are web applications blending content and functionality from various origins, have gained popularity for their ability to create robust apps without starting from scratch. Nevertheless, mashups introduce new security concerns.

One major risk lies in the incorporation of code from untrusted sources. This code may harbor malicious intent, potentially exploiting vulnerabilities within the mashup or the user's browser. For instance, it could pilfer the user's personal data or assume control of their computer. 
Another risk involves circumventing security measures in the underlying web applications. For instance, a mashup could access a secured web app protected by a login screen without requiring the user to log in. This opens the door for attackers to access sensitive information or perform unauthorized actions.
<br/>
To mitigate these risks, it's crucial to thoroughly assess the security of any code integrated into a mashup. Developers should employ security tools to scrutinize code for vulnerabilities. Additionally, users should be conscious of mashup-related risks and take precautions, such as using secure browsers and avoiding links from untrusted sources.
              </p>

             
            </div>
          </div>
        </div>

        <div className="services__content">
          <div>
           
            <h3 className="services__title">
              Access <br /> Control
            </h3>
          </div>

          <span onClick={() => toggleTab(5)} className="services__button">
            View More
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>

          <div
            className={
              toggleState === 5
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times services__modal-close"
              ></i>

              <h3 className="services__modal-title">Access Control</h3>
              <p className="services__modal-description">
              Insufficient access control issues can also be understood as violations of proper data flow. In 2008, these vulnerabilities accounted for approximately 4.6% of reported security flaws. To illustrate, consider a case involving MoinMoin wiki, where a lack of access control verification allowed a user to access any wiki page, even if the page's access control list (ACL) explicitly denied them access. Similar to the aforementioned vulnerabilities, this scenario can be seen as a breach in data flow – the wiki page ends up in the hands of a user who should not have permission to view it.
<br/>
Addressing insufficient access control can be particularly complex because access control rules tend to be highly specific to each application. These rules govern who can access what within the application, and any lapses can result in unauthorized data exposure. Therefore, it's crucial to implement robust access control mechanisms tailored to the unique requirements of each application to prevent such security breaches.
              </p>

             
            </div>
          </div>
        </div>

        <div className="services__content">
          <div>
           
            <h3 className="services__title">
              Password <br /> Disclosure
            </h3>
          </div>

          <span onClick={() => toggleTab(6)} className="services__button">
            View More
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>

          <div
            className={
              toggleState === 6
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times services__modal-close"
              ></i>

              <h3 className="services__modal-title">Password Disclosure</h3>
              <p className="services__modal-description">
              One particular vulnerability is known as password disclosure. This issue came to light within HotCRP and serves as an illustrative example. It stems from two distinct features within HotCRP:

Firstly, HotCRP offers users the option to request a password reminder email in case they forget their login credentials. Importantly, HotCRP ensures that these reminder emails are sent only to the email address associated with the user's account as stored on the server. The second feature involves an email preview mode, allowing site administrators to configure HotCRP to display email content directly within the user's browser, rather than sending the emails via the standard email delivery method.
In this identified vulnerability, an adversary takes advantage of HotCRP's email preview mode and requests a password reminder for a different HotCRP user, who becomes the victim in this scenario. When HotCRP is in email preview mode, it inadvertently displays the content of the password reminder email in the adversary's browser instead of sending it to the victim's email address. As a result, the victim's password becomes visible to the adversary.
This situation underscores the critical importance of addressing access control issues to prevent such unauthorized disclosure of sensitive information.
              </p>

            
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

