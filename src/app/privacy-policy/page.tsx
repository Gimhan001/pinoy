import React from "react";
import Image from "next/image";
import Banner from "@/app/assets/images/template-cover.jpg";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Pinoy",
  description: "Travel anywahere It is All About Travel ",
};

export default function PrivacyPolicy() {
  return (
    <main className="">
      <Image
        className="lg:-mt-6"
        src={Banner}
        width={0}
        height={0}
        alt="privacy-policy"
        placeholder="blur"
        priority
      />
      <div className="container mx-auto">
        <div className="w-full text-center mt-4">
          <h1 className="text-3xl font-bold capitalize">Privacy policy</h1>
          <p className="text-center mt-4 px-4">
            Your privacy is important to us. It is Pinoy Travels&apos; policy to
            respect your privacy regarding any information we may collect from
            you across our website,{" "}
            <a className="text-blue-500" href="http://pinoytravels.uk">
              pinoytravels.uk
            </a>
            , and other sites we own and operate.
          </p>
        </div>

        <div className="container mx-auto px-4 mt-16">
          <h4 className="text-base font-bold capitalize">
            1. Information we collect
          </h4>
          <h5 className="text-sm font-bold text-black mt-4 capitalize px-4">
            Log data
          </h5>
          <p className="text-sm text-start mt-2 px-4">
            When you visit our website, our servers may automatically log the
            standard data provided by your web browser. It may include your
            computer&apos;s Internet Protocol &#40;IP&#41; address, your browser
            type and version, the pages you visit, the time and date of your
            visit, the time spent on each page, and other details.
          </p>

          <h5 className="text-sm font-bold text-black mt-4 capitalize px-4">
            Device data
          </h5>
          <p className="text-sm text-start mt-2 px-4">
            We may also collect data about the device you&apos;re using to
            access our website. This data may include the device type, operating
            system, unique device identifiers, device settings, and geo-location
            data. What we collect can depend on the individual settings of your
            device and software. We recommend checking the policies of your
            device manufacturer or software provider to learn what information
            they make available to us.
          </p>
          <h5 className="text-sm font-bold text-black mt-2 capitalize px-4">
            Personal information
          </h5>
          <p className="text-sm text-start mt-2 px-4">
            We may ask for personal information, such as your&#58;
          </p>
          <ul>
            <li className="text-sm px-8">• Name</li>
            <li className="text-sm px-8">• Email</li>
            <li className="text-sm px-8">• Social media profiles</li>
            <li className="text-sm px-8">• Date of birth</li>
            <li className="text-sm px-8">• Phone/mobile number</li>
            <li className="text-sm px-8">• Payment information</li>
          </ul>
        </div>

        <div className="container mx-auto px-4 mt-12">
          <h4 className="text-base font-bold capitalize">
            2. Legal bases for processing
          </h4>
          <p className="text-sm text-start mt-2 px-4">
            We will process your personal information lawfully, fairly and in a
            transparent manner. We collect and process information about you
            only where we have legal bases for doing so.
          </p>
          <p className="text-sm text-start mt-2 px-4">
            We may also collect data about the device you&apos;re using to
            access our website. This data may include the device type, operating
            system, unique device identifiers, device settings, and geo-location
            data. What we collect can depend on the individual settings of your
            device and software. We recommend checking the policies of your
            device manufacturer or software provider to learn what information
            they make available to us.
          </p>
          <p className="text-sm text-start mt-2 px-4">
            These legal bases depend on the services you use and how you use
            them, meaning we collect and use your information only where&#58;
          </p>
          <ul>
            <li className="text-sm px-8">
              • it&apos;s necessary for the performance of a contract to which
              you are a party or to take steps at your request before entering
              into such a contract (for example, when we provide a service, you
              request from us);
            </li>
            <li className="text-sm px-8 mt-2">
              • it satisfies a legitimate interest (which is not overridden by
              your data protection interests), such as for research and
              development, to market and promote our services, and to protect
              our legal rights and interests
            </li>
            <li className="text-sm px-8 mt-2">
              • you give us consent to do so for a specific purpose (for
              example, you might consent to us sending you our newsletter); or
            </li>
            <li className="text-sm px-8 mt-2">
              • we need to process your data to comply with a legal obligation.
            </li>
          </ul>
          <p className="text-sm text-start mt-2 px-4">
            Where you consent to our use of information about you for a specific
            purpose, you have the right to change your mind at any time (but
            this will not affect any processing that has already taken place).
          </p>
          <p className="text-sm text-start mt-2 px-4">
            We don&apos;t keep personal information for longer than is
            necessary. While we retain this information, we will protect it
            within commercially acceptable means to prevent loss and theft, as
            well as unauthorised access, disclosure, copying, use or
            modification. That said, we advise that no method of electronic
            transmission or storage is 100% secure and cannot guarantee absolute
            data security. If necessary, we may retain your personal information
            for our compliance with a legal obligation or in order to protect
            your vital interests or the vital interests of another natural
            person.
          </p>
        </div>

        <div className="container mx-auto px-4 mt-12">
          <h4 className="text-base font-bold capitalize">
            3. Collection and use of information
          </h4>
          <p className="text-sm text-start mt-2 px-4">
            We may collect, hold, use and disclose information for the following
            purposes and personal information will not be further processed in a
            manner that is incompatible with these purposes:
          </p>
          <ul>
            <li className="text-sm px-8">
              • to enable you to customise or personalise your experience of our
              website;
            </li>
            <li className="text-sm px-8 mt-2">
              • to enable you to access and use our website, associated
              applications and associated social media platforms;
            </li>
            <li className="text-sm px-8 mt-2">
              • to contact and communicate with you;
            </li>
            <li className="text-sm px-8 mt-2">
              • for internal record keeping and administrative purposes;
            </li>
            <li className="text-sm px-8 mt-2">
              • for analytics, market research and business development,
              including to operate and improve our website, associated
              applications and associated social media platforms;
            </li>
            <li className="text-sm px-8 mt-2">
              • to run competitions and/or offer additional benefits to you;
            </li>
            <li className="text-sm px-8 mt-2">
              • for advertising and marketing, including to send you promotional
              information about our products and services and information about
              third parties that we consider may be of interest to you;
            </li>
            <li className="text-sm px-8 mt-2">
              • to comply with our legal obligations and resolve any disputes
              that we may have;{" "}
            </li>
            <li className="text-sm px-8 mt-2">
              • to consider your employment application.
            </li>
          </ul>
          <h5 className="text-sm font-bold text-black mt-4 capitalize px-4">
            Fair Information Practices
          </h5>
          <p className="text-sm text-start mt-2 px-4">
            The Fair Information Practices Principles form the backbone of
            privacy law in the United States and the concepts they include have
            played a significant role in the development of data protection laws
            around the globe. Understanding the Fair Information Practice
            Principles and how they should be implemented is critical to comply
            with the various privacy laws that protect personal information.
          </p>
          <p className="text-sm text-start mt-2 px-4">
            In order to be in line with Fair Information Practices we will take
            the following responsive action, should a data breach occur:
          </p>
          <ul>
            <li className="text-sm px-8"> • Within 1 business day</li>
          </ul>
          <p className="text-sm text-start mt-2 px-4">
            We will notify the users via in-site notification
          </p>
          <ul>
            <li className="text-sm px-8">• Within 7 business days</li>
          </ul>
          <p className="text-sm text-start mt-2 px-4">
            We also agree to the Individual Redress Principle which requires
            that individuals have the right to legally pursue enforceable rights
            against data collectors and processors who fail to adhere to the
            law. This principle requires not only that individuals have
            enforceable rights against data users, but also that individuals
            have recourse to courts or government agencies to investigate and/or
            prosecute non-compliance by data processors.
          </p>
          <h5 className="text-sm font-bold text-black mt-4 capitalize px-4">
            CAN SPAM Act
          </h5>
          <p className="text-sm text-start mt-2 px-4">
            The CAN-SPAM Act is a law that sets the rules for commercial email,
            establishes requirements for commercial messages, gives recipients
            the right to have emails stopped from being sent to them, and spells
            out tough penalties for violations.
          </p>
          <h5 className="text-sm font-bold text-black mt-4 capitalize px-4">
            We collect your email address in order to:
          </h5>
          <ul>
            <li className="text-sm px-8">
              • Send information, respond to inquiries, and/or other requests or
              questions
            </li>
          </ul>
          <h5 className="text-sm font-bold text-black mt-4 capitalize px-4">
            To be in accordance with CANSPAM, we agree to the following:
          </h5>
          <ul>
            <li className="text-sm px-8">
              • Not use false or misleading subjects or email addresses.
            </li>
            <li className="text-sm px-8 mt-2">
              • Identify the message as an advertisement in some reasonable way.
            </li>
            <li className="text-sm px-8 mt-2">
              • Include the physical address of our business or site
              headquarters.
            </li>
            <li className="text-sm px-8 mt-2">
              • Monitor third-party email marketing services for compliance, if
              one is used.
            </li>
            <li className="text-sm px-8 mt-2">
              • Honor opt-out/unsubscribe requests quickly.
            </li>
            <li className="text-sm px-8 mt-2">
              • Allow users to unsubscribe by using the link at the bottom of
              each email.
            </li>
          </ul>
        </div>

        <div className="container mx-auto px-4 mt-12">
          <h4 className="text-base font-bold capitalize">
            4. Disclosure of personal information to third parties
          </h4>
          <p className="text-sm text-start mt-2 px-4">
            We may disclose personal information to
          </p>
          <ul>
            <li className="text-sm px-8">
              • third party service providers for the purpose of enabling them
              to provide their services, including (without limitation) IT
              service providers, data storage, hosting and server providers, ad
              networks, analytics, error loggers, debt collectors, maintenance
              or problem-solving providers, marketing or advertising providers,
              professional advisors and payment systems operators;
            </li>
            <li className="text-sm px-8 mt-2">
              • our employees, contractors and/or related entities;
            </li>
            <li className="text-sm px-8 mt-2">
              • sponsors or promoters of any competition we run;
            </li>
            <li className="text-sm px-8 mt-2">
              • credit reporting agencies, courts, tribunals and regulatory
              authorities, in the event you fail to pay for goods or services we
              have provided to you;
            </li>
            <li className="text-sm px-8 mt-2">
              • courts, tribunals, regulatory authorities and law enforcement
              officers, as required by law, in connection with any actual or
              prospective legal proceedings, or in order to establish, exercise
              or defend our legal rights;
            </li>
            <li className="text-sm px-8 mt-2">
              • third parties, including agents or sub-contractors, who assist
              us in providing information, products, services or direct
              marketing to you;
            </li>
            <li className="text-sm px-8 mt-2">
              • third parties to collect and process data.
            </li>
          </ul>
        </div>

        <div className="container mx-auto px-4 mt-12">
          <h4 className="text-base font-bold capitalize">
            5. International transfers of personal information
          </h4>
          <p className="text-sm text-start mt-2 px-4">
            The personal information we collect is stored and processed in
            United Kingdom, or where we or our partners, affiliates and
            third-party providers maintain facilities. By providing us with your
            personal information, you consent to the disclosure to these
            overseas third parties.
          </p>
          <p className="text-sm text-start mt-2 px-4">
            We will ensure that any transfer of personal information from
            countries in the European Economic Area (EEA) to countries outside
            the EEA will be protected by appropriate safeguards, for example by
            using standard data protection clauses approved by the European
            Commission, or the use of binding corporate rules or other legally
            accepted means.
          </p>
          <p className="text-sm text-start mt-2 px-4">
            Where we transfer personal information from a non-EEA country to
            another country, you acknowledge that third parties in other
            jurisdictions may not be subject to similar data protection laws to
            the ones in our jurisdiction. There are risks if any such third
            party engages in any act or practice that would contravene the data
            privacy laws in our jurisdiction and this might mean that you will
            not be able to seek redress under our jurisdiction&apos;s privacy
            laws.
          </p>
        </div>

        <div className="container mx-auto px-4 mt-12">
          <h4 className="text-base font-bold capitalize">
            6. Your rights and controlling your personal information
          </h4>
          <ul>
            <li className="text-sm px-8">
              • <strong>Choice and consent:</strong> By providing personal
              information to us, you consent to us collecting, holding, using
              and disclosing your personal information in accordance with this
              privacy policy. If you are under 16 years of age, you must have,
              and warrant to the extent permitted by law to us, that you have
              your parent or legal guardian&apos;s permission to access and use
              the website and they (your parents or guardian) have consented to
              you providing us with your personal information. You do not have
              to provide personal information to us, however, if you do not, it
              may affect your use of this website or the products and/or
              services offered on or through it.
            </li>
            <li className="text-sm px-8 mt-2">
              • <strong>Information from third parties:</strong> If we receive
              personal information about you from a third party, we will protect
              it as set out in this privacy policy. If you are a third party
              providing personal information about somebody else, you represent
              and warrant that you have such person&apos;s consent to provide
              the personal information to us.
            </li>
            <li className="text-sm px-8 mt-2">
              • <strong>Restrict:</strong> You may choose to restrict the
              collection or use of your personal information. If you have
              previously agreed to us using your personal information for direct
              marketing purposes, you may change your mind at any time by
              contacting us using the details below. If you ask us to restrict
              or limit how we process your personal information, we will let you
              know how the restriction affects your use of our website or
              products and services.
            </li>
            <li className="text-sm px-8 mt-2">
              • <strong>Access and data portability:</strong> You may request
              details of the personal information that we hold about you. You
              may request a copy of the personal information we hold about you.
              Where possible, we will provide this information in CSV format or
              other easily readable machine format. You may request that we
              erase the personal information we hold about you at any time. You
              may also request that we transfer this personal information to
              another third party.
            </li>
            <li className="text-sm px-8 mt-2">
              • <strong>Correction:</strong> If you believe that any
              information, we hold about you is inaccurate, out of date,
              incomplete, irrelevant or misleading, please contact us using the
              details below. We will take reasonable steps to correct any
              information found to be inaccurate, incomplete, misleading or out
              of date. Notification of data breaches: We will comply laws
              applicable to us in respect of any data breach.
            </li>
            <li className="text-sm px-8 mt-2">
              • <strong>Complaints:</strong> If you believe that we have
              breached a relevant data protection law and wish to make a
              complaint, please contact us using the details below and provide
              us with full details of the alleged breach. We will promptly
              investigate your complaint and respond to you, in writing, setting
              out the outcome of our investigation and the steps we will take to
              deal with your complaint. You also have the right to contact a
              regulatory body or data protection authority in relation to your
              complaint.
            </li>
            <li className="text-sm px-8 mt-2">
              • <strong>Unsubscribe:</strong> To unsubscribe from our e-mail
              database or opt-out of communications (including marketing
              communications), please contact us using the details below or
              opt-out using the opt-out facilities provided in the
              communication.
            </li>
          </ul>
        </div>

        <div className="container mx-auto px-4 mt-12">
          <h4 className="text-base font-bold capitalize">7. Cookies</h4>
          <p className="text-sm text-start mt-2 px-4">
            We use &quot;cookies&quot; to collect information about you and your
            activity across our site. A cookie is a small piece of data that our
            website stores on your computer, and accesses each time you visit,
            so we can understand how you use our site. This helps us serve you
            content based on preferences you have specified. Please refer to our
            Cookie Policy for more information.
          </p>
        </div>

        <div className="container mx-auto px-4 mt-12">
          <h4 className="text-base font-bold capitalize">
            8. Business transfers
          </h4>
          <p className="text-sm text-start mt-2 px-4">
            If we or our assets are acquired, or in the unlikely event that we
            go out of business or enter bankruptcy, we would include data among
            the assets transferred to any parties who acquire us. You
            acknowledge that such transfers may occur, and that any parties who
            acquire us may continue to use your personal information according
            to this policy.
          </p>
        </div>

        <div className="container mx-auto px-4 mt-12">
          <h4 className="text-base font-bold capitalize">
            9. Limits of our policy
          </h4>
          <p className="text-sm text-start mt-2 px-4">
            Our website may link to external sites that are not operated by us.
            Please be aware that we have no control over the content and
            policies of those sites, and cannot accept responsibility or
            liability for their respective privacy practices.
          </p>
        </div>

        <div className="container mx-auto px-4 mt-12">
          <h4 className="text-base font-bold capitalize">
            10. Changes to this policy
          </h4>
          <p className="text-sm text-start mt-2 px-4">
            At our discretion, we may change our privacy policy to reflect
            current acceptable practices. We will take reasonable steps to let
            users know about changes via our website. Your continued use of this
            site after any changes to this policy will be regarded as acceptance
            of our practices around privacy and personal information.
          </p>
          <p className="text-sm text-start mt-2 px-4">
            If we make a significant change to this privacy policy, for example
            changing a lawful basis on which we process your personal
            information, we will ask you to re-consent to the amended privacy
            policy.
          </p>
        </div>

        <div className="container mx-auto px-4 mt-12">
          <p className="text-sm text-start mt-2 px-4">
            Aero Travels Data Controller
            <br />
            Zainul Fahad <br />
            <a
              className="text-blue-500"
              href="mailto:fahad.zainul@aerotravels.co.uk"
            >
              fahad.zainul@aerotravels.co.uk
            </a>
          </p>
          <p className="text-sm text-start mt-2 px-4">
            This policy is effective as of 28 August 2023.
          </p>
        </div>
      </div>
    </main>
  );
}
