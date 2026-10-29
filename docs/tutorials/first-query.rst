.. raw:: html

   <span class="ofd-kind">Tutorial</span>

Your First openFDA Query
========================

In this tutorial, you'll make your first request to openFDA, get a free API key, search for a drug and narrow the results by date. You need only a web browser.

Make Your First Request
-----------------------

openFDA needs no setup to try. Open this link in your browser. It returns one drug adverse event report:

.. code-block:: text

   https://api.fda.gov/drug/event.json?limit=1

Every response has two parts: ``meta``, which describes the dataset, and ``results``, which holds the reports.

Get A Free API Key
------------------

Without a key, you can make 1,000 requests a day from one IP address. With a `free key <https://open.fda.gov/apis/authentication/>`__, that rises to 120,000 a day. Both allow 240 requests a minute. Add the key as the first parameter:

.. code-block:: text

   https://api.fda.gov/drug/event.json?api_key=YOUR_KEY&limit=1

Search For A Drug
-----------------

Search the harmonised generic name, with the name in quotes:

.. code-block:: text

   https://api.fda.gov/drug/event.json?search=patient.drug.openfda.generic_name:"metformin hydrochloride"&limit=5

Join conditions with ``+AND+``:

.. code-block:: text

   search=patient.drug.openfda.generic_name:"metformin hydrochloride"+AND+serious:1

Limit To A Date Range
---------------------

Dates are written as YYYYMMDD:

.. code-block:: text

   search=receivedate:[20260101+TO+20260630]

Plan For Scale
--------------

One request returns at most 1,000 records, and you can skip up to `25,000 <https://open.fda.gov/apis/query-parameters/>`__. Larger pulls need openFDA's paging method or its bulk downloads.

What's Next
-----------

Before you build anything on these results, :doc:`check how current the data is <../how-to/check-data-freshness>`.
