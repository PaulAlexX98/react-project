import React, { useState } from "react";
import "./approach.css";

const Approach = () => {
  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="services section" id="approach">
      <h2 className="section__title">Approaches</h2>
      <span className="section__subtitle">Can be taken</span>

      <div className="services__container container grid">
        <div className="services__content">
          <div>
            
            <h3 className="services__title">
            LWeb<br /> 
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

              <h3 className="services__modal-title">LWeb</h3>
              <p className="services__modal-description">
              LWeb a framework proposed by Parker et. al. for enforcing label based, information flow policies in database-using web applications..This framework uses both LIO Haskell IFC enforcement Library along with Yesod web programming framework to build web applications. <br/>
LIO Haskell IFC enforcement library is an information flow control (IFC) library for the Haskell programming language. IFC is a mechanism that enforces security policies by tracking and controlling the flow of information within a system. LIO allows you to specify security policies in a high-level way, and then uses its enforcement mechanisms to ensure that those policies are always followed. LIO works by associating a security label with every piece of data. A label can be used to represent the sensitivity of the data, or the security clearance of the user who is accessing the data. When data is passed from one computation to another, the labels are checked to make sure that the flow of information is allowed. If the flow of information is not allowed, LIO will raise an error. LIO is a powerful tool for enforcing security policies in Haskell programs. It is flexible and expressive, and it can be used to enforce a wide variety of security policies. LIO is also relatively easy to use, and it can be integrated into existing Haskell programs with minimal effort. <br/>
Yesod is a free and open-source web framework based on Haskell for productive development of type-safe, RESTful, high performance web applications. It is developed by Michael Snoyman et al. Yesod is based on the WAI (Web Application Interface) standard, which provides a generic and efficient interface between web servers and web applications. This makes Yesod platform-independent and allows it to be used with a variety of web servers, such as Apache, Nginx, and Gunicorn. Yesod uses the Haskell type system to ensure that your code is type-safe, which can help to prevent errors and make your code more maintainable. Yesod includes a number of features to help you secure your web applications, such as input validation and CSRF protection. <br/>
The implementation of this approach has two parts.  First the core of LIO is extracted into a monad transformer (LMonad) and then applied to Yesod’s core monad. A monad is a structure in functional programming that combines program fragments (functions) and wraps their return values in a type with additional computation. Monads are used to handle side effects, such as I/O, state, and errors.  A monad transformer is a type constructor that takes a monad as an argument and returns a monad as a result. Monad transformers can be used to compose features encapsulated by monads – such as state, exception handling, and I/O – in a modular way.  The second part of the LWeb paper describes how they extended Yesod's table definition DSL and query functionality to permit defining and enforcing label-based policies on tables and enforcing them during query processing. LWeb's policy language is expressive, permitting dynamic per-table and per-row policies. This means that policies can be defined on a per-table basis, or they can be defined on a per-row basis. Dynamic policies can change over time, depending on the state of the system. LWeb is an extension to the LIO that aims to bring its benefits to Haskell-based web applications. <br/>
	<small class="greyed-text">This is taken from the below mentioned article <br/>
James Parker, Niki Vazou, and Michael Hicks. 2019. LWeb: information flow security for multi-tier web applications. Proc. ACM Program. Lang. 3, POPL, Article 75 (January 2019), 30 pages. https://doi.org/10.1145/3290388
</small>
              </p>

       
            </div>
          </div>
        </div>

        <div className="services__content">
          <div>

            <h3 className="services__title">
              Resin <br /> 
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

              <h3 className="services__modal-title">Resin</h3>
              <p className="services__modal-description">
              Resin is a novel language runtime designed to enhance security by allowing developers to specify data flow assertions at the application level. It provides essential components like policy objects, data tracking, and filter objects to achieve this goal effectively. These mechanisms enable Resin to check data flow assertions as data moves through an application, particularly when it crosses specific data flow boundaries.<br/>
One of the significant advantages of Resin is its ability to help prevent a wide range of security vulnerabilities commonly found in web applications. These vulnerabilities encompass issues such as SQL injection, cross-site scripting, inadvertent password disclosure, and missing access control checks. Integrating Resin into an application typically requires minimal modifications to the existing codebase, making it an efficient solution for bolstering security.<br/>
Resin operates within a language runtime environment, such as Python or PHP, allowing it to track data flow dynamically as the application runs. This dynamic approach is crucial for capturing dynamic properties like user-defined access control lists. Furthermore, Resin ensures that developers can write concise data flow assertions for various aspects of application security.<br/>
To address potential security challenges, Resin introduces three key concepts:
              </p>
              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                  Policy Objects: Developers annotate data, such as strings, with policy objects that encapsulate specific assertion functionality. These policy objects are written in the same language as the rest of the application, promoting code reuse and simplifying the creation of application-specific assertions.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Data Tracking: Resin tracks policy objects as data propagates through the application. This tracking ensures that data flow assertions are consistently checked wherever the data travels.</p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                  Filter Objects: When data is about to exit the control of Resin, such as when it's sent over the network, filter objects come into play. These filter objects check data flow assertions, assisted by the data's policy objects, to ensure that security policies are enforced.

                  </p>
                </li>
                <small class="greyed-text">This is taken from the below mentioned article <br/> Alexander Yip, Xi Wang, Nickolai Zeldovich, and M. Frans Kaashoek. 2009. Improving application security with data flow assertions. In Proceedings of the ACM SIGOPS 22nd symposium on Operating systems principles (SOSP '09). Association for Computing Machinery, New York, NY, USA, 291–304. https://doi.org/10.1145/1629575.1629604</small> 
              </ul>
            </div>
          </div>
        </div>

        <div className="services__content">
          <div>
           
            <h3 className="services__title">
              WASC
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

              <h3 className="services__modal-title">WASC</h3>
              <p className="services__modal-description">
              A significant portion of security issues in web applications arises due to a lack of proper input validation for data received from the network. These inputs, when used in security-sensitive operations, can lead to vulnerabilities. To address this problem, an effective approach involves implementing rigorous checks on the parts of data used in such operations that are influenced by network inputs. In this context, a byte is considered tainted if it depends on or is controlled by network packets.<br/>
One solution to this problem is the Web Application Security Compiler (WASC), a dynamic checking compiler designed to enhance the security of web applications in three-tier internet services. WASC focuses on safeguarding applications against two common types of web attacks: SQL injection and script injection. It accomplishes this by automatically introducing security checks into web applications.<br/>
WASC leverages SQL and HTML parsers to counter evasion techniques used by attackers, which exploit differences in how attack detection engines and target applications interpret inputs. Extensive testing with a fully functional WASC prototype demonstrates its effectiveness in preventing SQL and script injection attacks. Importantly, the latency introduced by the security checks imposed by WASC remains below 30% for the tested web applications.<br/>
WASC is built upon the foundation of GIFT, a dynamic information flow tracking service designed for single-process environments. To extend its capabilities to enterprise-grade web services, WASC introduces various enhancements, including support for 
implicit flows, information flow tracking across processes and machines (via mechanisms like IPC and persistent storage), and support for scripting languages. These enhancements enable WASC to effectively address the taint analysis challenges posed by multi-process, multi-language web applications.<br/>
Furthermore, WASC employs a comprehensive approach to detect security issues. It uses a full-fledged SQL parser to identify SQL operators in tainted portions of submitted SQL queries and utilizes HTML parsing techniques, such as those provided by Internet Explorer (IE), to identify scripts in tainted HTML pages. This thorough approach helps minimize false negatives without significantly increasing false positives.<br/>
              <small class="greyed-text">This is taken from the below mentioned article <br/> Susanta Nanda, Lap-Chung Lam, and Tzi-cker Chiueh. 2007. Dynamic multi-process information flow tracking for web application security. In Proceedings of the 2007 ACM/IFIP/USENIX international conference on Middleware companion (MC '07). Association for Computing Machinery, New York, NY, USA, Article 19, 1–20. https://doi.org/10.1145/1377943.1377956</small>
              </p>

       
            </div>
          </div>
        </div>

        

        <div className="services__content">
          <div>
           
            <h3 className="services__title">
            Web application  <br /> firewalls
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

              <h3 className="services__modal-title">Web Application Firewalls</h3>
              <p className="services__modal-description">
              Web Application Firewalls (WAFs) were conceived with a concept akin to traditional firewalls, aiming to delve deep into the packets transmitted or received through HTTP, HTTPS, SOAP, XML-RPC, and Web Service layers. These packets undergo scrutiny to identify either application-specific attack signatures or unusual traffic patterns. WAFs can manifest as either software-based solutions or hardware appliances, with Modsecurity serving as an illustrative example.<br/>
Despite the technological sophistication underpinning WAFs, they are not infallible and can sometimes succumb to evasion tactics. In many instances, they are designed to detect specific attack signatures that have been previously identified, rendering them less effective against zero-day attacks. While detection methods have been developed to counter automated attacks orchestrated by tools like Nikto, Whisker, and Nessus, more sophisticated attacks, such as HTTP header attacks and SQL injections, can readily circumvent WAF defences. <br/>
<small class="greyed-text">This is taken from the below mentioned article <br/> Susanta Nanda, Lap-Chung Lam, and Tzi-cker Chiueh. 2007. Dynamic multi-process information flow tracking for web application security. In Proceedings of the 2007 ACM/IFIP/USENIX international conference on Middleware companion (MC '07). Association for Computing Machinery, New York, NY, USA, Article 19, 1–20. https://doi.org/10.1145/1377943.1377956</small>
              

              </p>

         
            </div>
          </div>
        </div>

        <div className="services__content">
          <div>
           
            <h3 className="services__title">
              Inlined <br /> IFC Monitor
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

              <h3 className="services__modal-title">Inlined IFC Monitor</h3>
              <p className="services__modal-description">
              This approach introduces an inlined Information Flow Control (IFC) monitor designed for ECMAScript 5 with web support, incorporating the no-sensitive-upgrade (NSU) technique. It further presents experimental evaluations involving synthetic mashups and performance benchmarks. Given that a significant portion of client-side application code is scripted in JavaScript (JS), the inherent flexibility and dynamic nature of JS pose substantial challenges when striving to enforce security measures for mashups. Notably, JS engines are meticulously engineered for optimal performance, prompting considerations for inlined monitoring approaches in the realm of IFC.<br/>
The core concept behind inlining is the integration of a monitor into the source JS program, effectively transforming it into an instrumented program. This instrumented program operates within the context of additional JS programs, namely the monitor core and API facades, as elaborated in subsequent sections. Together, these components constitute a monitored program. Importantly, this inlining process does not necessitate any modifications to web browsers, offering deployment options through external HTML proxies, server-side integration, or JS interpretation/compilation pipeline hooks. The versatility of inlining is underscored by its compatibility with various JS engines. Moreover, inlined monitoring holds the potential to leverage Just-In-Time (JIT) compilation for improved performance, with engineering efforts scaling primarily with the complexity of JS rather than JIT compilers. <br/>
The design of this inlined monitoring approach adheres to five primary objectives: 

              </p>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                  Soundness and Transparency: Ensuring that the monitoring system is sound and its operations are transparent.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Tamper-Resistance: Safeguarding against unauthorized tampering or modifications.</p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                  Simplicity: Striving for simplicity in both the inlining process and the monitored program to facilitate soundness, transparency, and tamper resistance, without requiring formal proof of correctness.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                  Modularity: Promoting modularity to facilitate quick adjustments and experimentation with different monitoring responses, such as policy violations and NSU variations.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                  JIT-Friendliness: Ensuring that the transformed code remains conducive to efficient JIT compilation while preserving the original program's structure to aid in debugging.
                  </p>
                </li>
              </ul> 
              <p className="services__modal-description">
              <br/>The performance evaluation focuses on monitored programs, and the Haskell-based inliner itself exhibits satisfactory performance. The assessment reveals that the monitoring process may introduce substantial overhead in certain usage scenarios. Nonetheless, when compared to alternative approaches like interpreter modification, custom metacircular interpreters, or SME (Secure Multi-Execution), inlined monitoring shows promise in enhancing performance through strategies like sparse inlining and extended JIT support.<br/>
Sparse inlining, which aims to minimize program instrumentation based on static Information Flow (IF) analysis conducted prior to inlining, is one avenue for potential performance improvement. This approach identifies code fragments in well-engineered JS programs where information flows can be statically inferred. These fragments remain unaltered, while the rest of the program undergoes instrumentation to accommodate the inferred flows. Unlike sparse labeling, which permits unlabeled values at runtime, sparse inlining not only allows for unlabeled values but also disables their monitoring.<br/>
<small class="greyed-text">This is taken from the below mentioned article <br/> Andrey Chudnov and David A. Naumann. 2015. Inlined Information Flow Monitoring for JavaScript. In Proceedings of the 22nd ACM SIGSAC Conference on Computer and Communications Security (CCS '15). Association for Computing Machinery, New York, NY, USA, 629–643. https://doi.org/10.1145/2810103.2813684 </small>

              </p>

 
              
            </div>
          </div>
        </div>

        <div className="services__content">
          <div>
           
            <h3 className="services__title">
              SMT <br /> based analysis
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

              <h3 className="services__modal-title">SMT Based Analysis</h3>
              <p className="services__modal-description">
              Web Services rely on message-passing for communication, which inherently introduces the possibility of message races. Message races occur when the order of message arrival at a destination is unpredictable, influenced by factors like network latencies and scheduling variabilities. These races can lead to unexpected consequences due to software bugs, causing messages to arrive in unintended sequences. To enhance the reliability of Web Services, an approach employing Satisfiability Modulo Theories (SMT)-based analysis is proposed for the detection of message races. <br/>

The method begins by modeling a Business Process Execution Language (BPEL) process as a Web Service Modeling Graph (WSMG). This WSMG representation is then translated into a set of SMT constraints. The satisfiability of these constraints determines whether message races will occur during the execution of the Web Service, thus reducing the problem of message race detection to constraint-solving challenges. <br/>

Reliability constitutes one of the core pillars of trustworthy Web Services development. Achieving reliability in this context is intricate due to the specific challenges involved. Web Services are particularly susceptible to concurrency issues, arising from both concurrent processing of user/service requests and complex interaction behaviors resulting from diverse communication mechanisms, including synchronous and asynchronous operations. Effective testing, analysis, and verification techniques are essential to address these challenges and produce reliable Web Services. <br/>

The focus of this paper lies in addressing the detection of message races in Web Services, as race conditions rank among the top critical programming errors. The introduced SMT-based approach presents an innovative solution to these longstanding issues that have troubled traditional testing methods. Notably, this approach has the capacity to verify the absence of message races within user-specified bounds, significantly reducing the rate of false negatives often encountered in other static analysis approaches. <br/>

To explore the vast array of potential scenarios comprehensively, the modeling of Web Services incorporates suitable classes of constraints, translating various analysis problems into constraint-solving tasks. The process involves translating a BPEL process into a WSMG model, encoding the WSMG as an SMT formula, and employing SMT solvers to determine formula satisfiability. The choice of SMT solvers is underpinned by their performance improvements, stemming from advances in Boolean satisfiability (SAT) solvers and SMT solvers. This approach streamlines message race detection into constraint solving, leveraging modern SMT solvers to assess the satisfiability of the SMT formula derived from the WSMG models. <br/>

In summary, this approach offers a robust means of detecting message races in Web Services by utilizing SMT-based analysis. Its advantages encompass the ability to verify the absence of message races within predefined bounds, implicit exploration of a wide range of possible scenarios, independence from controlling non-deterministic factors in Web Services testing environments, and the provision of detailed bug reports. <br/>

<small class="greyed-text">This is taken from the below mentioned article <br/> Elwakil, Mohamed & Yang, Zijiang & Wang, Liqiang & Chen, Qichang. (2010). Message Race Detection for Web Services by an SMT-Based Analysis. 182-194. 10.1007/978-3-642-16576-4_13.  </small>

              </p>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Approach;
