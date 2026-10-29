.. raw:: html

   <span class="ofd-kind">How-to guide</span>

Build Labelled Charts
=====================

This guide shows you how to count reactions reported for a drug and chart them responsibly.

Count Reactions For A Drug
--------------------------

``count`` returns the most frequent values of a field. Add ``.exact`` to count whole terms rather than single words:

.. code-block:: text

   https://api.fda.gov/drug/event.json?search=patient.drug.openfda.generic_name:"semaglutide"+AND+receivedate:[20250101+TO+20260630]&count=patient.reaction.reactionmeddrapt.exact

Narrow To Serious Reports
-------------------------

Add ``+AND+serious:1`` to the search.

Check The Role Of The Drug
--------------------------

A count for a drug includes every report that mentions it, including reports where it was only taken alongside the suspect drug. Say so on the chart, or check ``drugcharacterization`` in the underlying records.

Label Every Chart
-----------------

Each chart should carry the data's "as of" date, the source, and a note that reports don't establish cause or frequency. Here is what that looks like:

.. raw:: html

   <div class="ofd-figure">
     <p class="ttl">Most-reported terms in reports that mention semaglutide, January 2025 to June 2026</p>
     <div class="ofd-chart" id="chart-sema"></div>
     <p class="cap"><b>Data as of July 30, 2026.</b> Source: openFDA <code>drug/event</code>, reports received January 1, 2025 to June 30, 2026, captured October 29, 2026. Includes reports where semaglutide was a concomitant rather than suspect drug. Reports do not establish that semaglutide caused these events, and counts cannot show how often they occur. Some terms, such as off-label use, describe how the product was used rather than a reaction.</p>
   </div>
