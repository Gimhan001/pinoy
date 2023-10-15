import React from "react";
import Image from "next/image";
import Banner from "@/app/assets/images/terms-conditions.webp";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms and Conditions | Pinoy",
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
        alt="terms&conditions"
        placeholder="blur"
        priority
      />
      <div className="container mx-auto">
        <div className="w-full text-center mt-4">
          <h1 className="text-3xl font-bold capitalize">
            Terms and conditions
          </h1>
          <p className="text-start mt-4 px-4">
            These terms and conditions (&quot;Agreement&quot;) set forth the
            general terms and conditions of your use of the pinoytravels.uk
            website (&quot;Website&quot; or &quot;Service&quot;) and any of its
            related products and services (collectively, &quot;Services&quot;).
            This Agreement is legally binding between you (&quot;User&quot;,
            &quot;you&quot; or &quot;your&quot;) and PinoyTravels
            (&quot;PinoyTravels&quot;, &quot;we&quot;, &quot;us&quot; or
            &quot;our&quot;). By accessing and using the Website and Services,
            you acknowledge that you have read, understood, and agree to be
            bound by the terms of this Agreement. If you are entering into this
            Agreement on behalf of a business or other legal entity, you
            represent that you have the authority to bind such entity to this
            Agreement, in which case the terms &quot;User&quot;, &quot;you&quot;
            or &quot;your&quot; shall refer to such entity. If you do not have
            such authority, or if you do not agree with the terms of this
            Agreement, you must not accept this Agreement and may not access and
            use the Website and Services. You acknowledge that this Agreement is
            a contract between you and PinoyTravels, even though it is
            electronic and is not physically signed by you, and it governs your
            use of the Website and Services.
          </p>
        </div>

        <div className="container mx-auto mt-16">
          <h5 className="text-sm font-bold text-black mt-4 capitalize px-4">
            The Price of Your Travel Arrangements
          </h5>
          <ul>
            <li className="text-sm px-8 mt-2">
              • Price quotations are based on the prevailing cost at the date of
              booking.
            </li>
            <li className="text-sm px-8 mt-2">
              • We, PinoyTravels, have the liberty to change the prices at any
              time prior to a booking being confirmed.
            </li>
            <li className="text-sm px-8 mt-2">
              • Once a booking has been confirmed the total amount payable has
              to be settled. However, once the total value has been paid the
              price quoted is guaranteed.
            </li>
            <li className="text-sm px-8 mt-2">
              • We have the authority to refuse any sole discretion bookings.
            </li>
            <li className="text-sm px-8 mt-2">
              • When you are booking you confirm, if you are making a booking
              for more than one person, that you are responsible for all
              payments due from each and every party member for whom you are
              making a booking.
            </li>
          </ul>
        </div>

        <div className="container mx-auto mt-8">
          <h5 className="text-sm font-bold text-black mt-4 capitalize px-4">
            By the Company prior to your departure
          </h5>
          <p className="text-sm text-start mt-2 px-4">
            We look forward to providing you with the entire service at the time
            of booking.
          </p>
          <p className="text-sm text-start mt-2 px-4">
            Arrangements are planned in advance, and we have no direct control
            over independent suppliers such as airlines and hotels. Therefore,
            we have the right to make changes on occasion. Most of the changes
            tend to be subtle, but if the company considers it extensive, the
            change will be advised/communicated before your departure.
          </p>
        </div>

        <div className="container mx-auto mt-8">
          <h5 className="text-sm font-bold text-black mt-4 capitalize px-4">
            Flight
          </h5>
          <p className="text-sm text-start mt-2 px-4">
            We will not accept liability or pay compensation for flight delays.
            The airline will attempt to assist by allocating your seats on the
            next available flight. It is your responsibility to reconfirm the
            flight timing and departure terminals at least 72 hours before
            departure. Any amendments that we may make to the flight details,
            such as a change in carrier, departure time and airport of departure
            would be considered as a minor change and would not be subject to
            any compensation or allow you to cancel reservations. The exception
            to this would be if the timings changed by more than 12 hours.
          </p>
          <p className="text-sm text-start mt-2 px-4">
            Passport, Visa and Immigration Requirements
          </p>
          <p className="text-sm text-start mt-2 px-4">
            Your specific passport and visa requirements, and other immigration
            requirements are your responsibility and you should confirm these
            with the relevant Embassies and/or Consulates. We do not accept any
            responsibility if you cannot travel because you have not complied
            with any passport, visa or immigration requirement
          </p>
        </div>

        <div className="container mx-auto mt-8">
          <h5 className="text-sm font-bold text-black mt-4 capitalize px-4">
            Insurance
          </h5>
          <p className="text-sm text-start mt-2 px-4">
            It is your responsibility to ensure that you are adequately insured.
            We strongly recommend that you take out insurance, which should
            include cover against the cost of cancellation by you and assistance
            (including repatriation) in the event of accident or illness.
          </p>
        </div>

        <div className="container mx-auto mt-8">
          <h5 className="text-sm font-bold text-black mt-4 capitalize px-4">
            Connecting Flights
          </h5>
          <p className="text-sm text-start mt-2 px-4">
            Where domestic or international internal flights are booked, either
            by ourselves or by the client directly with the airline, we are
            unable to accept liability for any change in flight time by the
            carrier that would affect your onward or return travel arrangements.
            Where we have made reservations for domestic or internal scheduled
            flights payment must be made at the time of booking and is
            non-refundable. This would be in addition to our standard deposit.
            Our website is our responsibility, as your tour operator. It is not
            run on behalf of and does not commit the airlines mentioned herein
            or any airline whose services are used in the course of your travel
            arrangements. Please note that in accordance with Air Navigation
            Orders in order to qualify for infant status, a child must be less
            than 2 years of age on the date of its return flight.
          </p>
        </div>

        <div className="container mx-auto mt-8">
          <h5 className="text-sm font-bold text-black mt-4 capitalize px-4">
            Modification:
          </h5>
          <p className="text-sm text-start mt-2 px-4">
            If you wish to make any amendments to your booking, other than
            increasing the number of passengers travelling with you and subject
            to seat availability, you will have to pay an Amendment Fee per
            person which will be notified at the time of change.
          </p>
        </div>

        <div className="container mx-auto mt-8">
          <h5 className="text-sm font-bold text-black mt-4 capitalize px-4">
            Hotels and Accommodation:
          </h5>
          <p className="text-sm text-start mt-2 px-4">
            We acquire hotel and accommodation star ratings from a variety of
            sources and offer them as a general guide. However, these are not
            necessarily the official local rating and you should be aware that
            standards can vary between hotels and accommodation of the same
            class in different countries, and even in the same country.
            Different countries have different standards; a 3-star hotel in one
            country is not necessarily equivalent to a 3-star hotel in another.
            Whilst we endeavour to ensure that property images displayed on
            PinoyTravels Website are accurate and up to date representation of
            the properties, we cannot guarantee this always to be the case. The
            images are provided to give a general &#39;feel&#39; for the hotel.
          </p>
        </div>

        <div className="container mx-auto mt-8">
          <h5 className="text-sm font-bold text-black mt-4 capitalize px-4">
            Travel Documents:
          </h5>
          <p className="text-sm text-start mt-2 px-4">
            Please note that the required travel documentation (including
            medical certificates and Visas) responsibility is conceding to you.
            We do not accept the liable or offer any allowance for any delays or
            cancellations coursed to your incorrect travelling documentations.
          </p>
        </div>

        <div className="container mx-auto mt-8">
          <h5 className="text-sm font-bold text-black mt-4 capitalize px-4">
            Expectant Mothers
          </h5>
          <p className="text-sm text-start mt-2 px-4">
            It is impossible to arrange flights for expectant mothers who
            leftover 28 weeks of pregnancy on their date of return to origin. If
            they require to fly should consult their doctor approves its safe
            for a fly.
          </p>
        </div>

        <div className="container mx-auto mt-8">
          <h5 className="text-sm font-bold text-black mt-4 capitalize px-4">
            Billing and payments
          </h5>
          <p className="text-sm text-start mt-2 px-4">
            You shall pay all fees or charges to your account in accordance with
            the fees, charges, and billing terms in effect at the time a fee or
            charge is due and payable. Sensitive and private data exchange
            happens over a SSL secured communication channel and is encrypted
            and protected with digital signatures, and the Website and Services
            are also in compliance with PCI vulnerability standards in order to
            create as secure of an environment as possible for Users. Scans for
            malware are performed on a regular basis for additional security and
            protection. If, in our judgment, your purchase constitutes a
            high-risk transaction, we will require you to provide us with a copy
            of your valid government-issued photo identification, and possibly a
            copy of a recent bank statement for the credit or debit card used
            for the purchase. We reserve the right to change products and
            product pricing at any time. We also reserve the right to refuse any
            order you place with us. We may, in our sole discretion, limit or
            cancel quantities purchased per person, per household or per order.
            These restrictions may include orders placed by or under the same
            customer account, the same credit card, and/or orders that use the
            same billing and/or shipping address. In the event that we make a
            change to or cancel an order, we may attempt to notify you by
            contacting the e-mail and/or billing address/phone number provided
            at the time the order was made.
          </p>
        </div>

        <div className="container mx-auto mt-8">
          <h5 className="text-sm font-bold text-black mt-4 capitalize px-4">
            Cancellation of Your Travel Arrangements
          </h5>
          <p className="text-sm text-start mt-2 px-4">
            The company has the right to cancel your travel arrangements and
            will return the total money that you have paid or will offer
            alternative available travel arrangements. (Provide for comparable
            cost)
          </p>
          <p className="text-sm text-start mt-2 px-4">
            Please note that the company will not take the responsibility for
            any major financial loss or incidental outflow and will not be able
            to compensate you if the cancellation is as a direct result of
            circumstance outlined in condition 6 (i) &quot;Force Majeure&quot;.
          </p>
          <ul>
            <li className="text-sm px-8 mt-2">
              • If your behaviour causes suffering, danger, damage or annoyance
              to any of the Company&apos;s customers, employees or any other
              third party; we have the right to terminate your travel
              arrangements without notice.
            </li>
            <li className="text-sm px-8 mt-2">
              • If any negotiations have entered or cancelled on behalf of your
              side, you have to pay the cancellation fees.
            </li>
            <li className="text-sm px-8 mt-2">
              • All cancellation must be written notification and refund payable
              will be subject to the return of all tickets and vouchers.
            </li>
            <li className="text-sm px-8 mt-2">
              • Please note that banks generally take up to 14 business days to
              process and transfer the funds into your account. Some banks can
              take up to 25-30 days, or until your next billing cycle.
              PinoyTravels has no influence over these timescales.
            </li>
          </ul>
        </div>

        <div className="container mx-auto mt-8">
          <h5 className="text-sm font-bold text-black mt-4 capitalize px-4">
            Cancellation:
          </h5>
          <p className="text-sm text-start mt-2 px-4">
            Airline tickets are paid for in full at the time of booking and in
            case of cancellation, we reserve the right to charge an
            administration charge, on top of which, the airline&apos;s charges
            will also apply. Please also note that some airlines may treat a
            name change as a cancellation and as such will not refund any funds.
          </p>
          <p className="text-sm text-start mt-2 px-4">
            When the outbound segment of your flight is not used the return
            segment will be automatically cancelled by the airline and no right
            to a refund exists for such partly used tickets.
          </p>
        </div>

        <div className="container mx-auto mt-8">
          <h5 className="text-sm font-bold text-black mt-4 capitalize px-4">
            If You Cancel Your Holiday:
          </h5>
          <p className="text-sm text-start mt-2 px-4">
            Should you or any member of your party be forced to cancel your
            holiday prior to departure, we must be notified in writing by the
            person who made the booking and who is therefore responsible for the
            payment of the cancellation charges CANCELLATION AFTER TICKET ISSUE:
            will result in loss of 100% of total cost of all travel arrangements
            in most cases. Please consult your reservation adviser. All
            passengers will receive a refund of the UK departure taxes less our
            administration fee. CHARTER FLIGHTS carry a 100% cancellation fee
            both before and after ticket issue.
          </p>
        </div>

        <div className="container mx-auto mt-8">
          <h5 className="text-sm font-bold text-black mt-4 capitalize px-4">
            Liability:
          </h5>
          <p className="text-sm text-start mt-2 px-4">
            (i) &quot;Force Majeure&quot; - The Company will not accept the
            responsibility of any loss, injury and damages caused by &quot;Force
            Majeure&quot;. The procedure not limited to strikes, uprisings,
            political unrest, hostilities, war, terrorist activity, epidemic,
            separation, or medical regulation, industrial disputes, fire, flood,
            technical, weather problems, transport, aircraft grounding, closure
            of airports or similar events beyond its control.
          </p>
          <p className="text-sm text-start mt-2 px-4">
            (ii) The company take the responsibility for assuring all module
            parts of your journey supplied to you as confirmed on your
            Confirmation Invoice and furthermore services offered on a suitable
            standard. And the company will take all reasonable and proper steps
            to assure that the suitable arrangements have made for all your
            holidays and the suppliers&apos; various services provided to you as
            a part of your holiday. The service is efficient, safe and reputable
            complete with local and international laws and regulations of the
            country. We do not have direct supplies control of services to
            clients. And we cannot take liable for death, injury or illness
            caused to client, unless through the negligence of our employees,
            agents, sub-contractors and suppliers. Further, the company cannot
            accept liability for incidental, consequential, economic loss or any
            indirect loss of any kind. Responsibilities in respect of air and
            cruise carriers are subject to their Condition of Carriage.
          </p>
        </div>

        <div className="container mx-auto mt-8">
          <h5 className="text-sm font-bold text-black mt-4 capitalize px-4">
            Accuracy of information:
          </h5>
          <p className="text-sm text-start mt-2 px-4">
            Occasionally there may be information on the Website that contains
            typographical errors, inaccuracies or omissions that may relate to
            pricing, availability, promotions and offers. We reserve the right
            to correct any errors, inaccuracies or omissions, and to change or
            update information or cancel orders if any information on the
            Website or Services is inaccurate at any time without prior notice
            (including after you have submitted your order). We undertake no
            obligation to update, amend or clarify information on the Website
            including, without limitation, pricing information, except as
            required by law. No specified update or refresh date applied on the
            Website should be taken to indicate that all information on the
            Website or Services has been modified or updated.
          </p>
        </div>

        <div className="container mx-auto mt-8">
          <h5 className="text-sm font-bold text-black mt-4 capitalize px-4">
            Third party services:
          </h5>
          <p className="text-sm text-start mt-2 px-4">
            If you decide to enable, access or use third party services, be
            advised that your access and use of such other services are governed
            solely by the terms and conditions of such other services, and we do
            not endorse, are not responsible or liable for, and make no
            representations as to any aspect of such other services, including,
            without limitation, their content or the manner in which they handle
            data (including your data) or any interaction between you and the
            provider of such other services. You irrevocably waive any claim
            against PinoyTravels with respect to such other services.
            PinoyTravels is not liable for any damage or loss caused or alleged
            to be caused by or in connection with your enablement, access or use
            of any such other services, or your reliance on the privacy
            practices, data security processes or other policies of such other
            services. You may be required to register for or log into such other
            services on their respective platforms. By enabling any other
            services, you are expressly permitting PinoyTravels to disclose your
            data as necessary to facilitate the use or enablement of such other
            service.
          </p>
        </div>

        <div className="container mx-auto mt-8">
          <h5 className="text-sm font-bold text-black mt-4 capitalize px-4">
            Links to other resources:
          </h5>
          <p className="text-sm text-start mt-2 px-4">
            Although the Website and Services may link to other resources (such
            as websites, mobile applications, etc.), we are not, directly or
            indirectly, implying any approval, association, sponsorship,
            endorsement, or affiliation with any linked resource, unless
            specifically stated herein. We are not responsible for examining or
            evaluating, and we do not warrant the offerings of, any businesses
            or individuals or the content of their resources. We do not assume
            any responsibility or liability for the actions, products, services,
            and content of any other third parties. You should carefully review
            the legal statements and other conditions of use of any resource
            which you access through a link on the Website and Services. Your
            linking to any other off-site resources is at your own risk.
          </p>
        </div>

        <div className="container mx-auto mt-8">
          <h5 className="text-sm font-bold text-black mt-4 capitalize px-4">
            Intellectual property rights:
          </h5>
          <p className="text-sm text-start mt-2 px-4">
            &quot;Intellectual Property Rights &quot; means all present and
            future rights conferred by statute, common law or equity in or in
            relation to any copyright and related rights, trademarks, designs,
            patents, inventions, goodwill and the right to sue for passing off,
            rights to inventions, rights to use, and all other intellectual
            property rights, in each case whether registered or unregistered and
            including all applications and rights to apply for and be granted,
            rights to claim priority from, such rights and all similar or
            equivalent rights or forms of protection and any other results of
            intellectual activity which subsist or will subsist now or in the
            future in any part of the world. This Agreement does not transfer to
            you any intellectual property owned by PinoyTravels or third
            parties, and all rights, titles, and interests in and to such
            property will remain (as between the parties) solely with
            PinoyTravels. All trademarks, service marks, graphics and logos used
            in connection with the Website and Services, are trademarks or
            registered trademarks of PinoyTravels or its licensors. Other
            trademarks, service marks, graphics and logos used in connection
            with the Website and Services may be the trademarks of other third
            parties. Your use of the Website and Services grants you no right or
            license to reproduce or otherwise use any of PinoyTravels or third
            party trademarks.
          </p>
        </div>

        <div className="container mx-auto mt-8">
          <h5 className="text-sm font-bold text-black mt-4 capitalize px-4">
            Disclaimer of warranty:
          </h5>
          <p className="text-sm text-start mt-2 px-4">
            You agree that such Service is provided on an “as is” and “as
            available” basis and that your use of the Website and Services is
            solely at your own risk. We expressly disclaim all warranties of any
            kind, whether express or implied, including but not limited to the
            implied warranties of merchantability, fitness for a particular
            purpose and non-infringement. We make no warranty that the Services
            will meet your requirements, or that the Service will be
            uninterrupted, timely, secure, or error-free; nor do we make any
            warranty as to the results that may be obtained from the use of the
            Service or as to the accuracy or reliability of any information
            obtained through the Service or that defects in the Service will be
            corrected. You understand and agree that any material and/or data
            downloaded or otherwise obtained through the use of Service is done
            at your own discretion and risk and that you will be solely
            responsible for any damage or loss of data that results from the
            download of such material and/or data. We make no warranty regarding
            any goods or services purchased or obtained through the Service or
            any transactions entered into through the Service unless stated
            otherwise. No advice or information, whether oral or written,
            obtained by you from us or through the Service shall create any
            warranty not expressly made herein.
          </p>
        </div>

        <div className="container mx-auto mt-8">
          <h5 className="text-sm font-bold text-black mt-4 capitalize px-4">
            Limitation of liability:
          </h5>
          <p className="text-sm text-start mt-2 px-4">
            To the fullest extent permitted by applicable law, in no event will
            PinoyTravels, its affiliates, directors, officers, employees,
            agents, suppliers or licensors be liable to any person for any
            indirect, incidental, special, punitive, cover or consequential
            damages (including, without limitation, damages for lost profits,
            revenue, sales, goodwill, use of content, impact on business,
            business interruption, loss of anticipated savings, loss of business
            opportunity) however caused, under any theory of liability,
            including, without limitation, contract, tort, warranty, breach of
            statutory duty, negligence or otherwise, even if the liable party
            has been advised as to the possibility of such damages or could have
            foreseen such damages. To the maximum extent permitted by applicable
            law, the aggregate liability of PinoyTravels and its affiliates,
            officers, employees, agents, suppliers and licensors relating to the
            services will be limited to an amount greater of one pound or any
            amounts actually paid in cash by you to PinoyTravels for the prior
            one month period prior to the first event or occurrence giving rise
            to such liability. The limitations and exclusions also apply if this
            remedy does not fully compensate you for any losses or fails of its
            essential purpose.
          </p>
        </div>

        <div className="container mx-auto mt-8">
          <h5 className="text-sm font-bold text-black mt-4 capitalize px-4">
            Indemnification:
          </h5>
          <p className="text-sm text-start mt-2 px-4">
            You agree to indemnify and hold PinoyTravels and its affiliates,
            directors, officers, employees, agents, suppliers and licensors
            harmless from and against any liabilities, losses, damages or costs,
            including reasonable attorneys&apos; fees, incurred in connection with or
            arising from any third-party allegations, claims, actions, disputes,
            or demands asserted against any of them as a result of or relating
            to your Content, your use of the Website and Services or any willful
            misconduct on your part.
          </p>
        </div>

        <div className="container mx-auto mt-8">
          <h5 className="text-sm font-bold text-black mt-4 capitalize px-4">
            Dispute resolution
          </h5>
          <p className="text-sm text-start mt-2 px-4">
            The formation, interpretation, and performance of this Agreement and
            any disputes arising out of it shall be governed by the substantive
            and procedural laws of United Kingdom without regard to its rules on
            conflicts or choice of law and, to the extent applicable, the laws
            of United Kingdom. The exclusive jurisdiction and venue for actions
            related to the subject matter hereof shall be the courts located in
            United Kingdom, and you hereby submit to the personal jurisdiction
            of such courts. You hereby waive any right to a jury trial in any
            proceeding arising out of or related to this Agreement. The United
            Nations Convention on Contracts for the International Sale of Goods
            does not apply to this Agreement.
          </p>
        </div>

        <div className="container mx-auto mt-8">
          <h5 className="text-sm font-bold text-black mt-4 capitalize px-4">
            Changes and amendments
          </h5>
          <p className="text-sm text-start mt-2 px-4">
            We reserve the right to modify this Agreement or its terms relating
            to the Website and Services at any time, effective upon posting of
            an updated version of this Agreement on the Website. When we do, we
            will revise the updated date at the bottom of this page. Continued
            use of the Website and Services after any such changes shall
            constitute your consent to such changes.
          </p>
        </div>

        <div className="container mx-auto mt-8">
          <h5 className="text-sm font-bold text-black mt-4 capitalize px-4">
            Acceptance of these terms
          </h5>
          <p className="text-sm text-start mt-2 px-4">
            You acknowledge that you have read this Agreement and agree to all
            its terms and conditions. By accessing and using the Website and
            Services you agree to be bound by this Agreement. If you do not
            agree to abide by the terms of this Agreement, you are not
            authorized to access or use the Website and Services.
          </p>
        </div>

        <div className="container mx-auto mt-8">
          <h5 className="text-sm font-bold text-black mt-4 capitalize px-4">
            Contacting us
          </h5>
          <p className="text-sm text-start mt-2 px-4">
            If you would like to contact us to understand more about this
            Agreement or wish to contact us concerning any matter relating to
            it, you may do so via the contact form or send an email to{" "}
            <a className="text-blue-500" href="mailto:cs@pinoytravels.uk">
              cs@pinoytravels.uk
            </a>
          </p>
        </div>
      </div>
    </main>
  );
}
