// services/reportGenerator.js

import jsPDF from "jspdf"
import "jspdf-autotable"

// define a generatePDF function that accepts a tickets argument
const generatePDF = (info, docName, docText, req) => {
  // initialize jsPDF
  const doc = new jsPDF()
  let tableColumn = []
  let tableRows = []
  //To generate count report
  if (req === "count") {
    // define the columns we want and their titles
    tableColumn = ["Customers", "Trainers", "Guards", "Managers"]
    // define an empty array of rows
    tableRows = []

    info.forEach(inforow => {
      const infoData = [
        inforow.users,
        inforow.guards,
        inforow.trainers,
        inforow.managers,
      ]
      // push each tickcet's info into a row
      tableRows.push(infoData)
    })
  } else if (req === "trainer") {
    tableColumn = ["Trainer ID", "Name"]
    // define an empty array of rows
    tableRows = []

    info.forEach(inforow => {
      const infoData = [inforow.tid,inforow.name ]
      // push each tickcet's info into a row
      tableRows.push(infoData)
    })
  } else if (req === "guards") {
    tableColumn = ["Name", "Shift"]
    // define an empty array of rows
    tableRows = []

    info.forEach(inforow => {
      const infoData = [inforow.name, inforow.shift]
      // push each tickcet's info into a row
      tableRows.push(infoData)
    })
  } else if (req === "customer") {
    tableColumn = ["Name", "Contact", "Payment"]
    // define an empty array of rows
    tableRows = []

    info.forEach(inforow => {
      const infoData = [inforow.name, inforow.contact, inforow.payment]
      // push each tickcet's info into a row
      tableRows.push(infoData)
    })
  }
  else{
    tableColumn = ["Name"]
    // define an empty array of rows
    tableRows = []

    info.forEach(inforow => {
      const infoData = [inforow.name]
      // push each tickcet's info into a row
      tableRows.push(infoData)
    })
  }

  // startY is basically margin-top
  doc.autoTable(tableColumn, tableRows, { startY: 20 })
  doc.autoTable(tableColumn, tableRows, { startY: 20 })

  doc.text(`${docText}`, 14, 15)
  // we define the name of our PDF file.
  doc.save(`Report_${docName}.pdf`)
}

export default generatePDF
