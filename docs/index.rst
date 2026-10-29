:og:description: Working with openFDA drug adverse event data after FDA's move to real-time reporting.

openFDA Drug Safety Developer Guide
===================================

.. raw:: html

   <div class="ofd-hero">
     <p class="eyebrow">openFDA · Developer Guide</p>
     <p class="sub">Working With Adverse Event Data After FDA's Move To Real-Time Reporting</p>
     <p class="lede">Pharmacovigilance teams, health-tech products and research tools rely on FDA's adverse event data to spot safety signals early. Most of them reach it through openFDA, FDA's free public API, which turns millions of adverse event reports into searchable JSON. In 2026, the way FDA publishes that data changed, and openFDA has not kept pace.</p>
     <div class="ofd-buttons">
       <a class="ofd-btn primary" href="tutorials/first-query.html">Start with the tutorial</a>
       <a class="ofd-btn" href="how-to/check-data-freshness.html">Check data freshness</a>
     </div>
     <p class="ofd-tour-link"><a href="#" id="tour-replay">New here? Take the 30-second tour</a></p>
   </div>

   <div class="ofd-figure" id="live-panel">
     <p class="ttl">How current is openFDA right now?</p>
     <div class="ofd-live">
       <div class="stat"><div class="l">openFDA last updated</div><div class="v" id="live-updated">2026-07-30</div></div>
       <div class="stat"><div class="l">Latest report included</div><div class="v" id="live-latest">2026-06-30</div></div>
       <div class="stat warn"><div class="l">Days since the latest report</div><div class="v" id="live-days">121</div></div>
     </div>
     <p class="ofd-live-note" id="live-note">Values captured on October 29, 2026.</p>
   </div>

The Problem
-----------

.. raw:: html

   <span class="ofd-label">What changed</span>

On March 11, 2026, FDA launched the `Adverse Event Monitoring System (AEMS) <https://www.raps.org/news-and-articles/news-articles/2026/3/fda-consolidates-adverse-events-reporting-systems>`__, bringing drug, vaccine and other adverse event reporting onto one platform that FDA says publishes reports in real time. This followed FDA's August 2025 move to `publish drug adverse event reports daily <https://www.statnews.com/2025/08/22/fda-faers-drugs-adverse-events/>`__. openFDA's drug adverse event data still `updates quarterly <https://open.fda.gov/apis/drug/event/>`__, with a lag of three months or more.

.. raw:: html

   <span class="ofd-label">What breaks</span>

Dashboards, research tools and AI products built on openFDA show data that's months behind FDA's own, and most never tell their users. When those adverse event counts are then read as evidence that a drug is risky, decisions end up resting on data that is both outdated and misunderstood.

.. raw:: html

   <span class="ofd-label">Real example</span>

On October 29, 2026, openFDA's drug adverse event data reported a last update of July 30, 2026, and its most recent reports were received on June 30, 2026. The dataset holds over 20.6 million reports, but nothing from the four months since.

.. raw:: html

   <div class="ofd-figure">
     <p class="ttl">FDA says it now publishes in real time. openFDA's data ends at June 30, 2026.</p>
     <div class="ofd-chart" id="chart-gap"></div>
     <p class="cap">Sources: RAPS on the AEMS launch, March 11, 2026; STAT on daily FAERS publication, August 22, 2025; openFDA <code>meta.last_updated</code> and a count of reports by receive date, captured October 29, 2026. "Real time" is FDA's own description of AEMS.</p>
   </div>

How This Guide Is Organised
---------------------------

The guide follows the `Diátaxis <https://diataxis.fr/>`__ framework, so each page does one job.

.. raw:: html

   <div class="ofd-cards">
     <a class="ofd-card" href="tutorials/first-query.html"><span class="k">Tutorial</span><span class="t">Your First openFDA Query</span><span class="d">Learn by doing: make a request, get a key and search for a drug.</span></a>
     <a class="ofd-card" href="how-to/check-data-freshness.html"><span class="k">How-to guide</span><span class="t">Check Data Freshness</span><span class="d">Find out how current the data is, and show users an honest date.</span></a>
     <a class="ofd-card" href="how-to/build-labelled-charts.html"><span class="k">How-to guide</span><span class="t">Build Labelled Charts</span><span class="d">Count reactions and chart them with the caveats each needs.</span></a>
     <a class="ofd-card" href="reference/adverse-event-fields.html"><span class="k">Reference</span><span class="t">Adverse Event Fields</span><span class="d">The fields that carry the meaning, with an annotated live example.</span></a>
     <a class="ofd-card" href="explanation/avoiding-misreadings.html"><span class="k">Explanation</span><span class="t">Why Adverse Event Data Gets Misread</span><span class="d">The common wrong conclusions, and the accurate way to state each one.</span></a>
     <a class="ofd-card" href="reference/change-log.html"><span class="k">Reference</span><span class="t">Change Log</span><span class="d">FDA and openFDA milestones, and the revision history of this guide.</span></a>
   </div>

API responses captured from the live openFDA API on October 29, 2026. Licensed under `CC BY 4.0 <https://creativecommons.org/licenses/by/4.0/>`__. Written and maintained by `Archana Panda <https://archanacontent.github.io>`__, Senior Technical Content Writer. Not affiliated with FDA. openFDA data is unvalidated and must not be used to make decisions about medical care.

.. toctree::
   :hidden:
   :caption: Tutorials

   tutorials/first-query

.. toctree::
   :hidden:
   :caption: How-to guides

   how-to/check-data-freshness
   how-to/build-labelled-charts

.. toctree::
   :hidden:
   :caption: Reference

   reference/adverse-event-fields
   reference/change-log
   reference/glossary

.. toctree::
   :hidden:
   :caption: Explanation

   explanation/avoiding-misreadings
