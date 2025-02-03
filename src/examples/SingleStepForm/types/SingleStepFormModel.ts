type SingleStepFormModel = {
  text: string
  multilineText: string
  selection: string
  phoneNo: string
  searchable: string
  date: string | null
  dateInterval: string
  countable: number | ''
  agreement: string
  fileUpload: string
  fileUpload2: string
  fileUpload3: File[] | ''

  anotherShortText: string
  radioSelection1: string
  radioSelection2: string
  radioSelection3: string
  radioSelection4: string
  fileUploadMulti: string
}

export default SingleStepFormModel
