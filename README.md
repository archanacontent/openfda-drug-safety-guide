# openFDA Drug Safety Developer Guide

**Working With Adverse Event Data After FDA's Move To Real-Time Reporting**

Live site: https://archanacontent.github.io/openfda-drug-safety-guide/

Pharmacovigilance teams, health-tech products and research tools rely on FDA's adverse event data to spot safety signals early. Most of them reach it through openFDA, FDA's free public API. In March 2026, FDA launched its Adverse Event Monitoring System (AEMS), which it says publishes reports in real time, while openFDA's drug adverse event data still updates quarterly. On October 29, 2026, openFDA's latest reports were from June 30, 2026.

## What's Inside

The guide follows the [Diátaxis](https://diataxis.fr/) framework.

| Type | Page | What It Covers |
| :--- | :--- | :--- |
| Tutorial | [Your First openFDA Query](docs/tutorials/first-query.rst) | Make a request, get a key, search for a drug |
| How-to guide | [Check Data Freshness](docs/how-to/check-data-freshness.rst) | Find how current the data is and show users an honest date |
| How-to guide | [Build Labelled Charts](docs/how-to/build-labelled-charts.rst) | Count reactions and chart them with the right caveats |
| Reference | [Adverse Event Fields](docs/reference/adverse-event-fields.rst) | The fields that matter, with an annotated live example |
| Reference | [Change Log](docs/reference/change-log.rst) | FDA and openFDA milestones, and revision history |
| Reference | [Glossary](docs/reference/glossary.rst) | Key terms |
| Explanation | [Why Adverse Event Data Gets Misread](docs/explanation/avoiding-misreadings.rst) | Common wrong conclusions and accurate alternatives |

Every chart and example uses data captured from the live openFDA API on October 29, 2026.

## Build Locally

```
pip install -r requirements.txt
sphinx-build -b html docs _build/html
```

## License

Licensed under [CC BY 4.0](LICENSE). Not affiliated with FDA. openFDA data is unvalidated and must not be used to make decisions about medical care.

## Author

Written and maintained by [Archana Panda](https://archanacontent.github.io), Senior Technical Content Writer.
