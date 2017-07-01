import pdfMake from 'pdfmake';
import 'pdfmake/vfs_fonts';

class RequestApprovedController {
  constructor($cookies, $filter, $stateParams, UsersService) {
    this.$cookies = $cookies;
    this.$filter = $filter;
    this.$stateParams = $stateParams;
    this.UsersService = UsersService;

    this.user = UsersService.getCurrentUser();
    this.model = $stateParams.model;
  }

  $onInit() {
    this.language = this.$cookies.get('atr-language');
    this.process = this.$stateParams.process;
    this.labelColumnWidth = 100;

    if (this.model.bondClass.revolving) {
      this.revolvingBond = this.$filter('translate')('Yes');
    } else {
      this.revolvingBond = this.$filter('translate')('No');
    }

    // Check if the user has a policy
    if (this.user.policy) {
      this.policyTable = {
        headerRows: 1,
        widths: ['*', '*', '*', '*'],
        body: [
          [
            {
              text: this.$filter('translate')('Policy Number'),
              style: 'tableHeader'
            },
            {
              text: this.$filter('translate')('Bond Number'),
              style: 'tableHeader'
            },
            {
              text: this.$filter('translate')('Agency'),
              style: 'tableHeader'
            },
            {
              text: this.$filter('translate')('Risk Code'),
              style: 'tableHeader'
            }
          ],
          [
            this.user.policy.id,
            '123', // random number
            'Agency',
            this.model.bondRisk.code
          ]
        ]
      };
    } else {
      this.policyTable = {
        headerRows: 1,
        widths: ['*', '*', '*'],
        body: [
          [
            {
              text: this.$filter('translate')('Bond Number'),
              style: 'tableHeader'
            },
            {
              text: this.$filter('translate')('Agency'),
              style: 'tableHeader'
            },
            {
              text: this.$filter('translate')('Risk Code'),
              style: 'tableHeader'
            }
          ],
          [
            '123', // random number
            'Agency',
            this.model.bondRisk.code
          ]
        ]
      };
    }

    const pdfDocumentDefinition = {
      content: [
        // Header
        {
          image: 'logo',
          width: 150
        },
        {
          text: this.$filter('translate')('Request bond document'),
          style: 'header'
        },
        // Policy
        {
          table: this.policyTable,
          style: 'marginVertical'
        },
        // Customer
        {
          table: {
            widths: [this.labelColumnWidth, '*'],
            headerRows: 1,
            body: [
              [
                {
                  text: this.$filter('translate')('Customer'),
                  colSpan: 2,
                  style: 'tableHeader',
                  border: [true, true, true, true]
                },
                {}
              ],
              [
                {
                  text: `${this.$filter('translate')('Name')}:`,
                  border: [true, false, false, false],
                  alignment: 'right'
                },
                {
                  text: this.user.company.name,
                  border: [false, false, true, false]
                }

              ],
              [
                {
                  text: `${this.$filter('translate')('Address')}:`,
                  border: [true, false, false, false],
                  alignment: 'right'
                },
                {
                  text: `${this.user.company.address}, ${this.user.company.zipCode} ${this.user.company.city}`,
                  border: [false, false, true, false]
                }
              ],
              [
                {
                  text: `${this.$filter('translate')('Fiscal Code/VAT Number')}:`,
                  border: [true, false, false, false],
                  alignment: 'right'
                },
                {
                  text: this.user.company.fiscalCode,
                  border: [false, false, true, false]
                }
              ],
              [
                {
                  text: `${this.$filter('translate')('Citizenship')}:`,
                  border: [true, false, false, true],
                  alignment: 'right'
                },
                {
                  text: this.user.company.countryCode,
                  border: [false, false, true, true]
                }
              ]
            ]
          },
          layout: {
            defaultBorder: false
          },
          style: 'marginVertical'
        },
        // Beneficiary
        {
          table: {
            widths: [this.labelColumnWidth, '*'],
            headerRows: 1,
            body: [
              [
                {
                  text: this.$filter('translate')('Beneficiary'),
                  colSpan: 2,
                  style: 'tableHeader',
                  border: [true, true, true, true]
                },
                {}
              ],
              [
                {
                  text: `${this.$filter('translate')('Name')}:`,
                  border: [true, false, false, false],
                  alignment: 'right'
                },
                {
                  text: this.model.beneficiary.name,
                  border: [false, false, true, false]
                }

              ],
              [
                {
                  text: `${this.$filter('translate')('Address')}:`,
                  border: [true, false, false, false],
                  alignment: 'right'
                },
                {
                  text: `${this.model.beneficiary.address}, ${this.model.beneficiary.zipCode} ${this.model.beneficiary.city}`,
                  border: [false, false, true, false]
                }
              ],
              [
                {
                  text: `${this.$filter('translate')('Fiscal Code/VAT Number')}:`,
                  border: [true, false, false, false],
                  alignment: 'right'
                },
                {
                  text: this.model.beneficiary.fiscalCode,
                  border: [false, false, true, false]
                }
              ],
              [
                {
                  text: `${this.$filter('translate')('Citizenship')}:`,
                  border: [true, false, false, true],
                  alignment: 'right'
                },
                {
                  text: this.model.beneficiary.countryCode,
                  border: [false, false, true, true]
                }
              ]
            ]
          },
          layout: {
            defaultBorder: false
          },
          style: 'marginVertical'
        },
        // Bond data
        {
          table: {
            widths: [this.labelColumnWidth, '*'],
            headerRows: 1,
            body: [
              [
                {
                  text: this.$filter('translate')('Bond data'),
                  colSpan: 2,
                  style: 'tableHeader',
                  border: [true, true, true, true]
                },
                {}
              ],
              [
                {
                  text: `${this.$filter('translate')('Amount')}:`,
                  border: [true, false, false, false],
                  alignment: 'right'
                },
                {
                  text: this.$filter('currency')(this.model.amount),
                  border: [false, false, true, false]
                }
              ],
              [
                {
                  text: `${this.$filter('translate')('Duration')}:`,
                  border: [true, false, false, true],
                  alignment: 'right'
                },
                {
                  text: `${this.model.durationText} ${this.$filter('translate')('from')} ${this.$filter('date')(this.model.effectiveDate, 'dd-MM-yyyy')} ${this.$filter('translate')('to')} ${this.$filter('date')(this.model.expirationDate, 'dd-MM-yyyy')}`,
                  border: [false, false, true, true]
                }
              ]
            ]
          },
          layout: {
            defaultBorder: false
          },
          style: 'marginVertical'
        },
        // Signing
        {
          table: {
            widths: ['*', '*', '*'],
            headerRows: 1,
            body: [
              [
                this.$filter('translate')('Customer signature'),
                this.$filter('translate')('Beneficiary signature'),
                this.$filter('translate')('Atradius')
              ],
              [
                {
                  canvas: [
                    {
                      type: 'line',
                      lineWidth: 2,
                      x1: 0,
                      x2: 125,
                      y1: 30,
                      y2: 30
                    }
                  ]
                },
                {
                  canvas: [
                    {
                      type: 'line',
                      lineWidth: 2,
                      // closePath: true,
                      x1: 0,
                      x2: 125,
                      y1: 30,
                      y2: 30
                    }
                  ]
                },
                {
                  canvas: [
                    {
                      type: 'line',
                      lineWidth: 2,
                      x1: 0,
                      x2: 125,
                      y1: 30,
                      y2: 30
                    }
                  ]
                }
              ]
            ]
          },
          layout: {
            defaultBorder: false
          },
          style: 'marginVertical'
        }
      ],
      styles: {
        header: {
          fontSize: 18,
          bold: true,
          margin: [0, 20, 0, 10]
        },
        subHeader: {
          fontSize: 16,
          bold: true,
          margin: [0, 20, 0, 5]
        },
        tableHeader: {
          fontSize: 13,
          bold: true,
          color: '#000'
        },
        marginVertical: {
          margin: [0, 10, 0, 10]
        },
        paragraph: {
          margin: [0, 0, 0, 10]
        }
      },
      images: {
        logo: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABcAAAAGDCAYAAAAMMLMzAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABEBpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NDkxMSwgMjAxMy8xMC8yOS0xMTo0NzoxNiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ1dWlkOjVEMjA4OTI0OTNCRkRCMTE5MTRBODU5MEQzMTUwOEM4IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkY5MjRGODM3RERDNTExRTNBRjQ2ODM1QjEwMTYxRTgyIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkY5MjRGODM2RERDNTExRTNBRjQ2ODM1QjEwMTYxRTgyIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIElsbHVzdHJhdG9yIENDIChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6ZWM2ZTQ0YmYtYmU1NS00MGYzLWI3NWYtMjY5MTk2ODk5YWMyIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOmVj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'
      }
    };

    const pdfDocument = pdfMake.createPdf(pdfDocumentDefinition);

    pdfDocument.getDataUrl((dataUrl) => {
      const iframeElement = document.querySelector('#pdfIframe');
      iframeElement.src = dataUrl;
    });
  }
}

export default RequestApprovedController;
