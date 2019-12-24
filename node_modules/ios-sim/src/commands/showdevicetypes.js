const BaseCommand = require('../BaseCommand')
const { getDeviceTypes } = require('../helpers')

class ShowDeviceTypesCommand extends BaseCommand {
  async run () {
    const deviceTypes = getDeviceTypes()

    this.log(await this.output(deviceTypes))
    return deviceTypes
  }

  async output (devicetypes) {
    if (!devicetypes) {
      devicetypes = getDeviceTypes()
    }

    return devicetypes.join('\n')
  }
}

ShowDeviceTypesCommand.description = 'List the available device types'

ShowDeviceTypesCommand.flags = {
  ...BaseCommand.flags
}

module.exports = ShowDeviceTypesCommand
