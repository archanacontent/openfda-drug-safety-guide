.. raw:: html

   <span class="ofd-kind">Reference</span>

Adverse Event Fields
====================

The fields that carry the meaning in a drug adverse event report, as defined in openFDA's `field reference <https://open.fda.gov/fields/drugevent.yaml>`__.

Report Fields
-------------

``safetyreportid``
   The report's unique ID.

``receivedate``
   When FDA first received the report. If the report was updated later, this stays the date of the first version.

``receiptdate``
   When FDA received the most recent information in the report.

``serious``
   ``1`` if the event led to death, a life-threatening condition, hospitalisation, disability, a congenital anomaly or another serious condition. ``2`` if not.

``seriousnessdeath``
   ``1`` if the event resulted in death. Otherwise the field is absent.

``primarysource.qualification``
   Who originally reported it: ``1`` physician, ``2`` pharmacist, ``3`` other health professional, ``4`` lawyer, ``5`` consumer.

``duplicate``
   ``1`` if earlier versions of the report exist. openFDA shows only the latest version.

Drug Fields
-----------

``patient.drug``
   Every drug in the report, each with a ``drugcharacterization``: ``1`` suspect, ``2`` concomitant (taken alongside), ``3`` interacting. FDA doesn't validate these roles.

``patient.drug.medicinalproduct``
   The drug name as reported. It isn't standardised and can contain misspellings.

``patient.drug.openfda``
   Names and identifiers that openFDA has matched to official product data, such as ``generic_name`` and ``brand_name``. Search these, not ``medicinalproduct``.

Reaction Fields
---------------

``patient.reaction.reactionmeddrapt``
   Each reaction as a MedDRA term, in British spelling, so diarrhea appears as "diarrhoea".

``patient.reaction.reactionoutcome``
   ``1`` recovered, ``2`` recovering, ``3`` not recovered, ``4`` recovered with lasting effects, ``5`` fatal, ``6`` unknown.

.. _annotated-example:

Annotated Example
-----------------

.. raw:: html

   <div class="ofd-figure">
   <div class="ofd-json"><span class="k">"safetyreportid"</span>: "26561852", <span class="ofd-pin">1</span>
   <span class="k">"receivedate"</span>: "20260401", <span class="ofd-pin">2</span>
   <span class="k">"serious"</span>: "2", <span class="ofd-pin">3</span>
   <span class="k">"patient"</span>: {
     <span class="k">"reaction"</span>: [
       { <span class="k">"reactionmeddrapt"</span>: "Throat irritation", <span class="k">"reactionoutcome"</span>: "6" },
       { <span class="k">"reactionmeddrapt"</span>: "Dysphonia", <span class="k">"reactionoutcome"</span>: "6" }
     ],
     <span class="k">"drug"</span>: [
       { <span class="k">"medicinalproduct"</span>: "TYVASO DPI", <span class="k">"drugcharacterization"</span>: "1" }, <span class="ofd-pin">4</span>
       { <span class="k">"medicinalproduct"</span>: "FUROSEMIDE", <span class="k">"drugcharacterization"</span>: "2" },
       { <span class="k">"medicinalproduct"</span>: "FAMOTIDINE", <span class="k">"drugcharacterization"</span>: "2" } <span class="ofd-pin">5</span>
     ]
   }</div>
   <ol class="ofd-legend">
   <li><span class="ofd-pin">1</span><span>The report's unique ID.</span></li>
   <li><span class="ofd-pin">2</span><span>First received by FDA on April 1, 2026.</span></li>
   <li><span class="ofd-pin">3</span><span><code>2</code> means the event was not serious.</span></li>
   <li><span class="ofd-pin">4</span><span><code>1</code> marks the suspect drug, here TYVASO DPI (treprostinil).</span></li>
   <li><span class="ofd-pin">5</span><span><code>2</code> marks a concomitant drug. A search for famotidine returns this report, even though famotidine is not the suspect.</span></li>
   </ol>
   <p class="cap">Report 26561852, trimmed from a live response captured October 29, 2026. Every value shown was checked against the API.</p>
   </div>

.. warning::

   A search for a drug name returns every report that mentions it, whatever its role. Before attributing a reaction to the drug you searched for, check its ``drugcharacterization`` in each result.
