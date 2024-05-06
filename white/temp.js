const arr1 = [
  {
    "lender_id": "AMEX",
    "status_id": "Application Not Started",
    "column_3": "SUBMITTED_BY_CUSTOMER"
  },
  {
    "lender_id": "AMEX",
    "status_id": "Application Submitted",
    "column_3": "SUBMITTED_TO_BANK"
  },
  {
    "lender_id": "AMEX",
    "status_id": "Approved In Principle",
    "column_3": "AIP_APPROVED"
  },
  {
    "lender_id": "AMEX",
    "status_id": "Card Issued",
    "column_3": "CARD_ISSUED"
  },
  {
    "lender_id": "AU_BANK",
    "status_id": "Application Incomplete",
    "column_3": "CUSTOMER_INITIATED_ONLINE_APPLICATION"
  },
  {
    "lender_id": "AU_BANK",
    "status_id": "Application Not Started",
    "column_3": "CARD_SELECTED"
  },
  {
    "lender_id": "AU_BANK",
    "status_id": "Application Not Started",
    "column_3": "SUBMITTED_BY_CUSTOMER"
  },
  {
    "lender_id": "AU_BANK",
    "status_id": "Application Submitted",
    "column_3": "SUBMITTED_TO_BANK"
  },
  {
    "lender_id": "AU_BANK",
    "status_id": "Approved In Principle",
    "column_3": "AIP_APPROVED"
  },
  {
    "lender_id": "AU_BANK",
    "status_id": "Card Issued",
    "column_3": "CARD_ISSUED"
  },
  {
    "lender_id": "AXIS",
    "status_id": "Application Not Started",
    "column_3": "CARD_SELECTED"
  },
  {
    "lender_id": "AXIS",
    "status_id": "Application Not Started",
    "column_3": "SUBMITTED_BY_CUSTOMER"
  },
  {
    "lender_id": "AXIS",
    "status_id": "Application Submitted",
    "column_3": "SUBMITTED_TO_BANK"
  },
  {
    "lender_id": "AXIS",
    "status_id": "Application Submitted",
    "column_3": "TECHNICAL_ERROR"
  },
  {
    "lender_id": "AXIS",
    "status_id": "Approved In Principle",
    "column_3": "AIP_APPROVED"
  },
  {
    "lender_id": "AXIS",
    "status_id": "Card Issued",
    "column_3": "CARD_ISSUED"
  },
  {
    "lender_id": "BAJAJ_FINSERV",
    "status_id": "Application Submitted",
    "column_3": "SUBMITTED_TO_BANK"
  },
  {
    "lender_id": "BAJAJ_FINSERV",
    "status_id": "Approved In Principle",
    "column_3": "AIP_APPROVED"
  },
  {
    "lender_id": "BAJAJ_FINSERV",
    "status_id": "Card Issued",
    "column_3": "CARD_ISSUED"
  },
  {
    "lender_id": "BAJAJ_RBL",
    "status_id": "Application Incomplete",
    "column_3": "SUBMITTED_TO_BANK"
  },
  {
    "lender_id": "BAJAJ_RBL",
    "status_id": "Application Submitted",
    "column_3": "SUBMITTED_TO_BANK"
  },
  {
    "lender_id": "BAJAJ_RBL",
    "status_id": "Application Submitted",
    "column_3": "TECHNICAL_ERROR"
  },
  {
    "lender_id": "BAJAJ_RBL",
    "status_id": "Approved In Principle",
    "column_3": "AIP_APPROVED"
  },
  {
    "lender_id": "BAJAJ_RBL",
    "status_id": "Card Issued",
    "column_3": "CARD_ISSUED"
  },
  {
    "lender_id": "BANK_OF_BARODA",
    "status_id": "Application Incomplete",
    "column_3": "CUSTOMER_INITIATED_ONLINE_APPLICATION"
  },
  {
    "lender_id": "BANK_OF_BARODA",
    "status_id": "Application Not Started",
    "column_3": "CARD_SELECTED"
  },
  {
    "lender_id": "BANK_OF_BARODA",
    "status_id": "Application Not Started",
    "column_3": "SUBMITTED_BY_CUSTOMER"
  },
  {
    "lender_id": "BANK_OF_BARODA",
    "status_id": "Application Submitted",
    "column_3": "SUBMITTED_TO_BANK"
  },
  {
    "lender_id": "BANK_OF_BARODA",
    "status_id": "Approved In Principle",
    "column_3": "AIP_APPROVED"
  },
  {
    "lender_id": "BANK_OF_BARODA",
    "status_id": "Card Issued",
    "column_3": "CARD_ISSUED"
  },
  {
    "lender_id": "CITI",
    "status_id": "Card Issued",
    "column_3": "CARD_ISSUED"
  },
  {
    "lender_id": "CREDILIO_GILD",
    "status_id": "Application Incomplete",
    "column_3": "CUSTOMER_INITIATED_ONLINE_APPLICATION"
  },
  {
    "lender_id": "CREDILIO_GILD",
    "status_id": "Application Not Started",
    "column_3": "CARD_SELECTED"
  },
  {
    "lender_id": "CREDILIO_GILD",
    "status_id": "Application Not Started",
    "column_3": "SUBMITTED_BY_CUSTOMER"
  },
  {
    "lender_id": "CREDILIO_GILD",
    "status_id": "Application Submitted",
    "column_3": "SUBMITTED_TO_BANK"
  },
  {
    "lender_id": "CREDILIO_GILD",
    "status_id": "Card Issued",
    "column_3": "CARD_ISSUED"
  },
  {
    "lender_id": "FREECHARGE",
    "status_id": "Application Submitted",
    "column_3": "SUBMITTED_TO_BANK"
  },
  {
    "lender_id": "FREECHARGE",
    "status_id": "Card Issued",
    "column_3": "CARD_ISSUED"
  },
  {
    "lender_id": "HDFC",
    "status_id": "Application Submitted",
    "column_3": "SUBMITTED_TO_BANK"
  },
  {
    "lender_id": "HDFC",
    "status_id": "Approved In Principle",
    "column_3": "AIP_APPROVED"
  },
  {
    "lender_id": "HDFC",
    "status_id": "Card Issued",
    "column_3": "CARD_ISSUED"
  },
  {
    "lender_id": "HSBC",
    "status_id": "Application Incomplete",
    "column_3": "CUSTOMER_INITIATED_ONLINE_APPLICATION"
  },
  {
    "lender_id": "HSBC",
    "status_id": "Application Not Started",
    "column_3": "CARD_SELECTED"
  },
  {
    "lender_id": "HSBC",
    "status_id": "Application Not Started",
    "column_3": "SUBMITTED_BY_CUSTOMER"
  },
  {
    "lender_id": "HSBC",
    "status_id": "Application Submitted",
    "column_3": "SUBMITTED_TO_BANK"
  },
  {
    "lender_id": "HSBC",
    "status_id": "Approved In Principle",
    "column_3": "AIP_APPROVED"
  },
  {
    "lender_id": "HSBC",
    "status_id": "Card Issued",
    "column_3": "CARD_ISSUED"
  },
  {
    "lender_id": "ICICI",
    "status_id": "Application Submitted",
    "column_3": "SUBMITTED_TO_BANK"
  },
  {
    "lender_id": "ICICI",
    "status_id": "Approved In Principle",
    "column_3": "AIP_APPROVED"
  },
  {
    "lender_id": "ICICI",
    "status_id": "Card Issued",
    "column_3": "CARD_ISSUED"
  },
  {
    "lender_id": "IDFC_FIRST",
    "status_id": "Application Incomplete",
    "column_3": "CUSTOMER_INITIATED_ONLINE_APPLICATION"
  },
  {
    "lender_id": "IDFC_FIRST",
    "status_id": "Application Not Started",
    "column_3": "CARD_SELECTED"
  },
  {
    "lender_id": "IDFC_FIRST",
    "status_id": "Application Not Started",
    "column_3": "SUBMITTED_BY_CUSTOMER"
  },
  {
    "lender_id": "IDFC_FIRST",
    "status_id": "Application Submitted",
    "column_3": "SUBMITTED_TO_BANK"
  },
  {
    "lender_id": "IDFC_FIRST",
    "status_id": "Approved In Principle",
    "column_3": "AIP_APPROVED"
  },
  {
    "lender_id": "IDFC_FIRST",
    "status_id": "Card Issued",
    "column_3": "CARD_ISSUED"
  },
  {
    "lender_id": "IDFC_SECURED",
    "status_id": "Application Incomplete",
    "column_3": "CUSTOMER_INITIATED_ONLINE_APPLICATION"
  },
  {
    "lender_id": "IDFC_SECURED",
    "status_id": "Application Not Started",
    "column_3": "CARD_SELECTED"
  },
  {
    "lender_id": "IDFC_SECURED",
    "status_id": "Application Not Started",
    "column_3": "SUBMITTED_BY_CUSTOMER"
  },
  {
    "lender_id": "IDFC_SECURED",
    "status_id": "Application Submitted",
    "column_3": "SUBMITTED_TO_BANK"
  },
  {
    "lender_id": "IDFC_SECURED",
    "status_id": "Approved In Principle",
    "column_3": "AIP_APPROVED"
  },
  {
    "lender_id": "IDFC_SECURED",
    "status_id": "Card Issued",
    "column_3": "CARD_ISSUED"
  },
  {
    "lender_id": "INDUSIND",
    "status_id": "Application Incomplete",
    "column_3": "CUSTOMER_INITIATED_ONLINE_APPLICATION"
  },
  {
    "lender_id": "INDUSIND",
    "status_id": "Application Not Started",
    "column_3": "CARD_SELECTED"
  },
  {
    "lender_id": "INDUSIND",
    "status_id": "Application Not Started",
    "column_3": "SUBMITTED_BY_CUSTOMER"
  },
  {
    "lender_id": "INDUSIND",
    "status_id": "Application Submitted",
    "column_3": "SUBMITTED_TO_BANK"
  },
  {
    "lender_id": "INDUSIND",
    "status_id": "Approved In Principle",
    "column_3": "AIP_APPROVED"
  },
  {
    "lender_id": "INDUSIND",
    "status_id": "Card Issued",
    "column_3": "CARD_ISSUED"
  },
  {
    "lender_id": "KOTAK",
    "status_id": "Application Incomplete",
    "column_3": "CUSTOMER_INITIATED_ONLINE_APPLICATION"
  },
  {
    "lender_id": "KOTAK",
    "status_id": "Application Not Started",
    "column_3": "CARD_SELECTED"
  },
  {
    "lender_id": "KOTAK",
    "status_id": "Application Not Started",
    "column_3": "SUBMITTED_BY_CUSTOMER"
  },
  {
    "lender_id": "KOTAK",
    "status_id": "Application Submitted",
    "column_3": "SUBMITTED_TO_BANK"
  },
  {
    "lender_id": "KOTAK",
    "status_id": "Approved In Principle",
    "column_3": "AIP_APPROVED"
  },
  {
    "lender_id": "KOTAK",
    "status_id": "Card Issued",
    "column_3": "CARD_ISSUED"
  },
  {
    "lender_id": "MONEY_TAP",
    "status_id": "Card Issued",
    "column_3": "CARD_ISSUED"
  },
  {
    "lender_id": "RBL",
    "status_id": "Application Submitted",
    "column_3": "SUBMITTED_TO_BANK"
  },
  {
    "lender_id": "RBL",
    "status_id": "Card Issued",
    "column_3": "CARD_ISSUED"
  },
  {
    "lender_id": "SBI",
    "status_id": "Application Not Started",
    "column_3": "CARD_SELECTED"
  },
  {
    "lender_id": "SBI",
    "status_id": "Application Not Started",
    "column_3": "SUBMITTED_BY_CUSTOMER"
  },
  {
    "lender_id": "SBI",
    "status_id": "Application Submitted",
    "column_3": "SUBMITTED_TO_BANK"
  },
  {
    "lender_id": "SBI",
    "status_id": "Application Submitted",
    "column_3": "TECHNICAL_ERROR"
  },
  {
    "lender_id": "SBI",
    "status_id": "Approved In Principle",
    "column_3": "AIP_APPROVED"
  },
  {
    "lender_id": "SBI",
    "status_id": "Card Issued",
    "column_3": "CARD_ISSUED"
  },
  {
    "lender_id": "SCB",
    "status_id": "Application Submitted",
    "column_3": "SUBMITTED_TO_BANK"
  },
  {
    "lender_id": "SCB",
    "status_id": "Application Submitted",
    "column_3": "TECHNICAL_ERROR"
  },
  {
    "lender_id": "SCB",
    "status_id": "Approved In Principle",
    "column_3": "AIP_APPROVED"
  },
  {
    "lender_id": "SCB",
    "status_id": "Card Issued",
    "column_3": "CARD_ISSUED"
  },
  {
    "lender_id": "SLICE",
    "status_id": "Application Submitted",
    "column_3": "SUBMITTED_TO_BANK"
  },
  {
    "lender_id": "SLICE",
    "status_id": "Card Issued",
    "column_3": "CARD_ISSUED"
  },
  {
    "lender_id": "STASHFIN",
    "status_id": "Application Submitted",
    "column_3": "SUBMITTED_TO_BANK"
  },
  {
    "lender_id": "STASHFIN",
    "status_id": "Card Issued",
    "column_3": "CARD_ISSUED"
  },
  {
    "lender_id": "YES",
    "status_id": "Approved In Principle",
    "column_3": "AIP_APPROVED"
  },
  {
    "lender_id": "YES",
    "status_id": "Card Issued",
    "column_3": "CARD_ISSUED"
  },
  {
    "lender_id": "ZEST_MONEY",
    "status_id": "Card Issued",
    "column_3": "CARD_ISSUED"
  }
];

const arr2 = [
  {
    "lender_id": "AMEX",
    "status_id": "Application Not Started"
  },
  {
    "lender_id": "AMEX",
    "status_id": "Application Not Started"
  },
  {
    "lender_id": "AMEX",
    "status_id": "Application Incomplete"
  },
  {
    "lender_id": "AMEX",
    "status_id": "Approved In Principle"
  },
  {
    "lender_id": "AU_BANK",
    "status_id": "Application Not Started"
  },
  {
    "lender_id": "AU_BANK",
    "status_id": "Application Not Started"
  },
  {
    "lender_id": "AU_BANK",
    "status_id": "Application Not Started"
  },
  {
    "lender_id": "AU_BANK",
    "status_id": "Application Incomplete"
  },
  {
    "lender_id": "AU_BANK",
    "status_id": "Approved In Principle"
  },
  {
    "lender_id": "AXIS",
    "status_id": "Application Not Started"
  },
  {
    "lender_id": "AXIS",
    "status_id": "Application Not Started"
  },
  {
    "lender_id": "AXIS",
    "status_id": "Application Not Started"
  },
  {
    "lender_id": "AXIS",
    "status_id": "Application Not Started"
  },
  {
    "lender_id": "AXIS",
    "status_id": "Application Not Started"
  },
  {
    "lender_id": "AXIS",
    "status_id": "Application Not Started"
  },
  {
    "lender_id": "AXIS",
    "status_id": "Application Not Started"
  },
  {
    "lender_id": "AXIS",
    "status_id": "Application Submitted"
  },
  {
    "lender_id": "AXIS",
    "status_id": "Application Submitted"
  },
  {
    "lender_id": "AXIS",
    "status_id": "Application Incomplete"
  },
  {
    "lender_id": "AXIS",
    "status_id": "Application Incomplete"
  },
  {
    "lender_id": "AXIS",
    "status_id": "Approved In Principle"
  },
  {
    "lender_id": "BAJAJ_FINSERV",
    "status_id": "Application Not Started"
  },
  {
    "lender_id": "BAJAJ_FINSERV",
    "status_id": "Application Not Started"
  },
  {
    "lender_id": "BAJAJ_FINSERV",
    "status_id": "Application Submitted"
  },
  {
    "lender_id": "BAJAJ_FINSERV",
    "status_id": "Application Incomplete"
  },
  {
    "lender_id": "BAJAJ_FINSERV",
    "status_id": "Approved In Principle"
  },
  {
    "lender_id": "BAJAJ_RBL",
    "status_id": "Application Not Started"
  },
  {
    "lender_id": "BAJAJ_RBL",
    "status_id": "Application Not Started"
  },
  {
    "lender_id": "BAJAJ_RBL",
    "status_id": "Application Not Started"
  },
  {
    "lender_id": "BAJAJ_RBL",
    "status_id": "Application Not Started"
  },
  {
    "lender_id": "BAJAJ_RBL",
    "status_id": "Application Not Started"
  },
  {
    "lender_id": "BAJAJ_RBL",
    "status_id": "Application Not Started"
  },
  {
    "lender_id": "BAJAJ_RBL",
    "status_id": "Application Not Started"
  },
  {
    "lender_id": "BAJAJ_RBL",
    "status_id": "Application Not Started"
  },
  {
    "lender_id": "BAJAJ_RBL",
    "status_id": "Application Submitted"
  },
  {
    "lender_id": "BAJAJ_RBL",
    "status_id": "Application Submitted"
  },
  {
    "lender_id": "BAJAJ_RBL",
    "status_id": "Application Incomplete"
  },
  {
    "lender_id": "BAJAJ_RBL",
    "status_id": "Approved In Principle"
  },
  {
    "lender_id": "FREECHARGE",
    "status_id": "Application Submitted"
  },
  {
    "lender_id": "HDFC",
    "status_id": "Application Not Started"
  },
  {
    "lender_id": "HDFC",
    "status_id": "Application Not Started"
  },
  {
    "lender_id": "HDFC",
    "status_id": "Application Not Started"
  },
  {
    "lender_id": "HDFC",
    "status_id": "Application Not Started"
  },
  {
    "lender_id": "HDFC",
    "status_id": "Application Submitted"
  },
  {
    "lender_id": "HDFC",
    "status_id": "Application Incomplete"
  },
  {
    "lender_id": "HDFC",
    "status_id": "Approved In Principle"
  },
  {
    "lender_id": "HSBC",
    "status_id": "Application Not Started"
  },
  {
    "lender_id": "HSBC",
    "status_id": "Application Not Started"
  },
  {
    "lender_id": "HSBC",
    "status_id": "Application Incomplete"
  },
  {
    "lender_id": "HSBC",
    "status_id": "Approved In Principle"
  },
  {
    "lender_id": "ICICI",
    "status_id": "Application Not Started"
  },
  {
    "lender_id": "ICICI",
    "status_id": "Application Not Started"
  },
  {
    "lender_id": "ICICI",
    "status_id": "Application Not Started"
  },
  {
    "lender_id": "ICICI",
    "status_id": "Application Not Started"
  },
  {
    "lender_id": "ICICI",
    "status_id": "Application Not Started"
  },
  {
    "lender_id": "ICICI",
    "status_id": "Application Not Started"
  },
  {
    "lender_id": "ICICI",
    "status_id": "Application Not Started"
  },
  {
    "lender_id": "ICICI",
    "status_id": "Application Not Started"
  },
  {
    "lender_id": "ICICI",
    "status_id": "Application Submitted"
  },
  {
    "lender_id": "ICICI",
    "status_id": "Application Incomplete"
  },
  {
    "lender_id": "ICICI",
    "status_id": "Approved In Principle"
  },
  {
    "lender_id": "IDFC_FIRST",
    "status_id": "Application Not Started"
  },
  {
    "lender_id": "IDFC_FIRST",
    "status_id": "Application Not Started"
  },
  {
    "lender_id": "IDFC_FIRST",
    "status_id": "Application Not Started"
  },
  {
    "lender_id": "IDFC_FIRST",
    "status_id": "Application Submitted"
  },
  {
    "lender_id": "IDFC_FIRST",
    "status_id": "Application Incomplete"
  },
  {
    "lender_id": "IDFC_FIRST",
    "status_id": "Approved In Principle"
  },
  {
    "lender_id": "IDFC_SECURED",
    "status_id": "Application Not Started"
  },
  {
    "lender_id": "IDFC_SECURED",
    "status_id": "Application Not Started"
  },
  {
    "lender_id": "IDFC_SECURED",
    "status_id": "Application Not Started"
  },
  {
    "lender_id": "IDFC_SECURED",
    "status_id": "Application Submitted"
  },
  {
    "lender_id": "IDFC_SECURED",
    "status_id": "Application Incomplete"
  },
  {
    "lender_id": "IDFC_SECURED",
    "status_id": "Approved In Principle"
  },
  {
    "lender_id": "INDUSIND",
    "status_id": "Application Not Started"
  },
  {
    "lender_id": "INDUSIND",
    "status_id": "Application Not Started"
  },
  {
    "lender_id": "INDUSIND",
    "status_id": "Application Not Started"
  },
  {
    "lender_id": "INDUSIND",
    "status_id": "Application Incomplete"
  },
  {
    "lender_id": "INDUSIND",
    "status_id": "Approved In Principle"
  },
  {
    "lender_id": "NA",
    "status_id": "Application Not Started"
  },
  {
    "lender_id": "NA",
    "status_id": "Application Not Started"
  },
  {
    "lender_id": "NA",
    "status_id": "Application Not Started"
  },
  {
    "lender_id": "NA",
    "status_id": "Application Not Started"
  },
  {
    "lender_id": "NA",
    "status_id": "Application Not Started"
  },
  {
    "lender_id": "NA",
    "status_id": "Application Not Started"
  },
  {
    "lender_id": "RBL",
    "status_id": "Application Submitted"
  },
  {
    "lender_id": "SBI",
    "status_id": "Application Not Started"
  },
  {
    "lender_id": "SBI",
    "status_id": "Application Not Started"
  },
  {
    "lender_id": "SBI",
    "status_id": "Application Not Started"
  },
  {
    "lender_id": "SBI",
    "status_id": "Application Submitted"
  },
  {
    "lender_id": "SBI",
    "status_id": "Application Submitted"
  },
  {
    "lender_id": "SBI",
    "status_id": "Application Incomplete"
  },
  {
    "lender_id": "SBI",
    "status_id": "Application Incomplete"
  },
  {
    "lender_id": "SBI",
    "status_id": "Approved In Principle"
  },
  {
    "lender_id": "SCB",
    "status_id": "Application Not Started"
  },
  {
    "lender_id": "SCB",
    "status_id": "Application Not Started"
  },
  {
    "lender_id": "SCB",
    "status_id": "Application Submitted"
  },
  {
    "lender_id": "SCB",
    "status_id": "Application Submitted"
  },
  {
    "lender_id": "SCB",
    "status_id": "Application Incomplete"
  },
  {
    "lender_id": "SCB",
    "status_id": "Approved In Principle"
  },
  {
    "lender_id": "SLICE",
    "status_id": "Application Submitted"
  },
  {
    "lender_id": "STASHFIN",
    "status_id": "Application Submitted"
  },
  {
    "lender_id": "YES",
    "status_id": "Application Not Started"
  },
  {
    "lender_id": "YES",
    "status_id": "Application Not Started"
  },
  {
    "lender_id": "YES",
    "status_id": "Application Not Started"
  },
  {
    "lender_id": "YES",
    "status_id": "Application Incomplete"
  },
  {
    "lender_id": "YES",
    "status_id": "Approved In Principle"
  }
];


arr2.forEach((finder) => {
  const searchKey = finder.lender_id + '_' + finder.status_id
  const elementSearch = arr1.find((target) => {
    return target.lender_id === finder.lender_id && target.status_id === finder.status_id
  })
  finder['ans'] = elementSearch?.column_3;
})