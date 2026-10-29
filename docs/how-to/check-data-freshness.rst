.. raw:: html

   <span class="ofd-kind">How-to guide</span>

Check Data Freshness
====================

This guide shows you how to find out how current openFDA's drug adverse event data is, and how to tell your users.

.. raw:: html

   <div class="ofd-figure">
     <div class="ofd-flow">
       <div class="node"><b>Reporter</b><span>Patient, doctor, pharmacist or manufacturer</span></div>
       <div class="arrow">→</div>
       <div class="node"><b>FDA AEMS</b><span>Launched March 2026. FDA says reports publish in real time</span></div>
       <div class="arrow">→</div>
       <div class="node slow"><b>openFDA API</b><span>Refreshed quarterly, three months or more behind, per openFDA's documentation</span></div>
       <div class="arrow">→</div>
       <div class="node"><b>Your app</b><span>Shows whatever openFDA has</span></div>
     </div>
   </div>

Read meta.last_updated
----------------------

Every response includes ``meta.last_updated``. On October 29, 2026, the drug adverse event data reported ``2026-07-30``. During research, one query returned an older date of ``2026-04-28``, so read the value from each response rather than assuming it.

Find The Latest Report Date
---------------------------

Count reports by receive date over a recent range. The last date in the results is the most recent report openFDA holds:

.. code-block:: text

   https://api.fda.gov/drug/event.json?search=receivedate:[20260601+TO+20261031]&count=receivedate

On October 29, 2026, the last date returned was ``20260630``.

.. raw:: html

   <div class="ofd-figure">
     <p class="ttl">Drug adverse event reports in openFDA, by quarter received</p>
     <div class="ofd-chart" id="chart-quarters"></div>
     <p class="cap">Counts from openFDA <code>drug/event</code> by <code>receivedate</code>, captured October 29, 2026. No reports received after June 30, 2026 are in openFDA yet.</p>
   </div>

Show An Honest Date
-------------------

Display a "Data as of" date based on the latest report date, not today's date. Add a line explaining that FDA publishes newer reports through AEMS.

Know Where Newer Data Lives
---------------------------

For the most current reports, point users to FDA's AEMS. Use openFDA for historical analysis and trends.
