import Head from "next/head";
import React, { useState } from "react";

import * as Survey from "survey-react";
import "survey-react/survey.css";

var jsonBilling = {
  title: "Billing",
  pages: [
    {
      name: "page1",
      elements: [
        {
          type: "radiogroup",
          name: "customer_role",
          title: "What best describes your role?",
          hasOther: true,
          choices: [
            "Engineering Lead",
            "Project Manager",
            "Software Developer",
            "Designer",
            "Product Manager",
            "CEO / Founder",
            "Customer Support",
          ],
          otherText: "Other",
          colCount: 3,
        },
        {
          type: "radiogroup",
          name: "start_using",
          title: "How did you start using the product?",
          choices: [
            {
              value: "created",
              text: "I created my account",
            },
            {
              value: "invited",
              text: "I was invited to an account",
            },
          ],
        },
        {
          type: "radiogroup",
          name: "product_discovering",
          title: "How did you first discover the product? ",
          hasOther: true,
          choices: [
            "Friend or colleague",
            "Search engine",
            "Facebook",
            "Twitter",
            "Blog",
          ],
          otherText: "Other",
          colCount: 3,
        },
        {
          type: "radiogroup",
          name: "paid_customer",
          title: "Do you currently pay for the product? ",
          isRequired: true,
          choices: ["Yes", "No"],
        },
      ],
    },
    {
      name: "page2",
      elements: [
        {
          type: "radiogroup",
          name: "product_fit",
          title: "How would you feel if you could no longer use the product?",
          isRequired: true,
          choices: [
            {
              value: "3",
              text: "Very disappointed",
            },
            {
              value: "2",
              text: "Somewhat disappointed",
            },
            {
              value: "1",
              text: "Not disappointed",
            },
          ],
        },
        {
          type: "comment",
          name: "product_fit_comment",
          visibleIf: "{product_fit} notempty",
          title: "Please help us understand why you selected the answer above",
        },
      ],
    },
    {
      name: "page3",
      elements: [
        {
          type: "radiogroup",
          name: "product_alternative",
          title:
            "What would you use as an alternative if [the product] were no\nlonger available?",
          hasOther: true,
          choices: [
            "Alternative 1",
            "Alternative 2",
            "Alternative 3",
            "Alternative 4",
            "Alternative 5",
            "Alternative 6",
          ],
          otherText: "Other (please name)",
          colCount: 3,
        },
        {
          type: "radiogroup",
          name: "product_benefit",
          title:
            "What is the primary benefit that you have received from the\nproduct?",
          hasOther: true,
          choices: [
            "Benefit 1",
            "Benefit 2",
            "Benefit 3",
            "Benefit 4",
            "Benefit 5",
            "Benefit 6",
          ],
          colCount: 3,
        },
        {
          type: "radiogroup",
          name: "product_recommend",
          title: "Have you recommended the product to anyone?",
          choices: ["Yes", "No"],
        },
      ],
    },
    {
      name: "page4",
      elements: [
        {
          type: "rating",
          name: "nps_score",
          title:
            "How likely are you to recommend the product to a friend or\ncolleague? ",
          isRequired: true,
          rateMin: 0,
          rateMax: 10,
          minRateDescription: "Most unlikely",
          maxRateDescription: "Most likely",
        },
        {
          type: "radiogroup",
          name: "favorite_functionality",
          title: "What's your favorite functionality / add-on for the product?",
          hasOther: true,
          choices: [
            "Feature 1",
            "Feature 2",
            "Feature 3",
            "Feature 4",
            "Feature 5",
            "Feature 6",
          ],
          colCount: 3,
        },
        {
          type: "comment",
          name: "product_improvement",
          title:
            "How could the product be improved to better meet your\nneeds?",
        },
      ],
    },
    {
      name: "page5",
      elements: [
        {
          type: "multipletext",
          name: "contact_customer",
          title: "Want us to follow-up? Leave your name and email here:",
          items: [
            {
              name: "Name",
            },
            {
              name: "E-mail",
              inputType: "email",
              validators: [
                {
                  type: "email",
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

let jsonScheduling = {
  title: "Scheduling",
  questions: [
    {
      type: "checkbox",
      name: "car",
      title: "What car are you driving?",
      isRequired: true,
      hasSelectAll: true,
      hasNone: true,
      noneText: "None of the above",
      colCount: 4,
      choicesOrder: "asc",
      choices: [
        "Ford",
        "Tesla",
        "Vauxhall",
        "Volkswagen",
        "Nissan",
        "Audi",
        "Mercedes-Benz",
        "BMW",
        "Peugeot",
        "Toyota",
        "Citroen",
      ],
    },
  ],
};

const AccountingJson = {
  title: "Accounting",
  description:
    "This is the cider way of collecting information...",
  pages: [
    {
      name: "page1",
      elements: [
        {
          type: "radiogroup",
          name: "using_duration",
          title: "how long do you plan ahead for projects?",
          choices: [
            "Less than a month",
            "1-6 months",
            "7-12 months",
            "1-3 years",
            "Over 3 years",
          ],
        },
        {
          type: "radiogroup",
          name: "using_frequency",
          title: "How often did you use the service?",
          choices: [
            "Once a week",
            "2 or 3 times a month",
            "Once a month",
            "Less than once a month",
          ],
        },
        {
          type: "radiogroup",
          name: "cancel_reason",
          title: "What was the main reason for cancelling the service?",
          hasOther: true,
          choices: [
            "No longer need it",
            "It didn't meet my needs",
            "Found a better alternative",
            "Found a cheaper alternative",
            "Quality was less than expected",
            "Ease of use was less than expected",
            "Access to the service was less than expected",
            "Customer service was less than expected",
          ],
        },
        {
          type: "radiogroup",
          name: "satisfaction",
          title: "Overall, how satisfied were you with the service?",
          choices: [
            "Very Satisfied",
            "Satisfied",
            "Neutral",
            "Unsatisfied",
            "Very Unsatisfied",
          ],
        },
        {
          type: "matrix",
          name: "future_using",
          titleLocation: "hidden",
          columns: [
            "Definitely",
            "Probably",
            "Not Sure",
            "Probably Not",
            "Definitely Not",
          ],
          rows: [
            {
              value: "use_in_future",
              text: "Will you use our service in the future?",
            },
            {
              value: "recommend",
              text: "Will you recommend our service to others?",
            },
          ],
        },
        {
          type: "comment",
          name: "service_improvements",
          title: "How can we improve our service?",
        },
      ],
    },
  ],
  showQuestionNumbers: "off",
};

const Surv = ({ showSection }) => {
  const [isComplete, setIsComplete] = useState(false);

  return (
    <>
      {showSection === "accounting" && (
        <Survey.Survey
          json={AccountingJson}
          onProgressText={(event) => console.log(event)}
          showProgressBar="top"
          progressBarType="questions"
          showCompletedPage={isComplete}
          onComplete={(event, answers) => {
            console.log(event, answers);
            setIsComplete(true);
          }}
        />
      )}
      {showSection === "billing" && (
        <Survey.Survey
          json={jsonBilling}
          onProgressText={(event) => console.log(event)}
          showProgressBar="top"
          progressBarType="questions"
          showCompletedPage={isComplete}
          onComplete={(event, answers) => {
            console.log(event, answers);
            setIsComplete(true);
          }}
        />
      )}
      {showSection === "scheduling" && (
        <Survey.Survey
          json={jsonScheduling}
          onProgressText={(event) => console.log(event)}
          showProgressBar="top"
          progressBarType="questions"
          showCompletedPage={isComplete}
          onComplete={(event, answers) => {
            console.log(event, answers);
            setIsComplete(true);
          }}
        />
      )}
    </>
  );
};
export default function survey() {
  const [showSection, setShowSection] = useState("accounting");

  return (
    <div className="App">
      <h1>Cider questionnaire</h1>

      <div class="row">
        <div class="col-4">
          <br />
          <br />
          <br />
          <nav>
            <ul>
            <li>
                <h2>
                  <a
                    href="#accounting"
                    onClick={() => {
                      setShowSection("accounting");
                    }}
                  >
                    Accounting
                  </a>
                </h2>
              </li>
              <li>
                <h2>
                  <a
                    href="#billing"
                    onClick={() => {
                      setShowSection("billing");
                    }}
                  >
                    Billing
                  </a>
                </h2>
              </li>

              <li>
                <h2>
                  <a
                    href="#scheduling"
                    onClick={() => {
                      setShowSection("scheduling");
                    }}
                  >
                    Scheduling
                  </a>
                </h2>
              </li>
            </ul>
          </nav>
        </div>
        <div class="col-8">
          <div style={{ textAlign: "right", padding: 10 }}>12% Complete</div>
          <Surv showSection={showSection} />
        </div>
      </div>
    </div>
  );
}
