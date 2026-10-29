.. raw:: html

   <span class="ofd-kind">Explanation</span>

Why Adverse Event Data Gets Misread
===================================

FDA's own documentation is clear on each of these points. These are the misreadings that show up most often, with the wrong and the accurate way to state each one.

A Report Isn't Proof Of Cause
-----------------------------

FDA states that `"a causal relationship cannot be established" <https://open.fda.gov/apis/drug/event/>`__ between a product and the reactions listed in a report.

.. raw:: html

   <div class="ofd-wr">
     <div class="wrong"><span class="ofd-label">Wrong</span><p>"Drug X caused 500 cases of liver damage."</p></div>
     <div class="right"><span class="ofd-label">Right</span><p>"500 reports mention liver damage in patients taking Drug X."</p></div>
   </div>

Counts Aren't Incidence Rates
-----------------------------

FDA doesn't receive a report for every adverse event, so the data `cannot be used to estimate <https://open.fda.gov/apis/drug/event/>`__ how often an event happens.

.. raw:: html

   <div class="ofd-wr">
     <div class="wrong"><span class="ofd-label">Wrong</span><p>"Liver damage affects 2% of Drug X users."</p></div>
     <div class="right"><span class="ofd-label">Right</span><p>"The data can't tell us how common liver damage is with Drug X."</p></div>
   </div>

A Drug In A Report Isn't Always The Suspect
-------------------------------------------

Reports also list concomitant and interacting drugs. Check ``drugcharacterization`` before attributing anything. See the :ref:`annotated example <annotated-example>`.

Who Reported It Matters
-----------------------

.. raw:: html

   <div class="ofd-figure">
     <p class="ttl">Nearly half of reports originate with a consumer rather than a health professional</p>
     <div class="ofd-chart" id="chart-who"></div>
     <p class="cap">All openFDA drug adverse event reports with a known reporter type (19.9 million), by <code>primarysource.qualification</code>, which records who originally reported the event. Many of these reports reach FDA through drug manufacturers. Captured October 29, 2026; data as of July 30, 2026.</p>
   </div>

A Spike Isn't Automatically A Signal
------------------------------------

News coverage, lawsuits and how long a drug has been on the market all change how many reports get filed.

More Reports Can Mean More Use
------------------------------

A widely prescribed drug will collect more reports than a rarely used one, whatever its safety.
