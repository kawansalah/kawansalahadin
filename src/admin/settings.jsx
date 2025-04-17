import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Settings = () => {
  const [siteSettings, setSiteSettings] = useState({
    siteName: 'Kawan Salahadin',
    siteDescription: 'Portfolio Website',
    maintenanceMode: false,
    allowRegistration: true,
  });

  const [emailSettings, setEmailSettings] = useState({
    smtpHost: '',
    smtpPort: '',
    smtpUsername: '',
    smtpPassword: '',
    fromEmail: '',
    fromName: '',
  });

  const handleSiteSettingsChange = (field, value) => {
    setSiteSettings(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleEmailSettingsChange = (field, value) => {
    setEmailSettings(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSaveSettings = (section) => {
    // TODO: Implement API call to save settings
    console.log(`Saving ${section} settings:`, section === 'site' ? siteSettings : emailSettings);
  };

  return (
    <div className="p-6 w-full min-h-screen">
      <Card className="p-6 bg-[#121212] border-[#333] text-white">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-white">Settings</h1>
        </div>

        <Tabs defaultValue="site" className="space-y-4">
          <TabsList className="bg-[#222] border border-[#333]">
            <TabsTrigger value="site" className="data-[state=active]:bg-[#333] text-white">Site Settings</TabsTrigger>
            <TabsTrigger value="email" className="data-[state=active]:bg-[#333] text-white">Email Settings</TabsTrigger>
          </TabsList>

          <TabsContent value="site">
            <Card className="bg-[#1E1E1E] border-[#333]">
              <CardHeader>
                <CardTitle className="text-white">Site Configuration</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="siteName" className="text-gray-200">Site Name</Label>
                  <Input
                    id="siteName"
                    value={siteSettings.siteName}
                    onChange={(e) => handleSiteSettingsChange('siteName', e.target.value)}
                    className="bg-[#222] border-[#444] text-white focus:border-[#666] focus:ring-[#666]"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="siteDescription" className="text-gray-200">Site Description</Label>
                  <Input
                    id="siteDescription"
                    value={siteSettings.siteDescription}
                    onChange={(e) => handleSiteSettingsChange('siteDescription', e.target.value)}
                    className="bg-[#222] border-[#444] text-white focus:border-[#666] focus:ring-[#666]"
                  />
                </div>

                <div className="flex items-center space-x-2">
                  <Switch
                    id="maintenanceMode"
                    checked={siteSettings.maintenanceMode}
                    onCheckedChange={(checked) => handleSiteSettingsChange('maintenanceMode', checked)}
                    className="data-[state=checked]:bg-[#333]"
                  />
                  <Label htmlFor="maintenanceMode" className="text-gray-200">Maintenance Mode</Label>
                </div>

                <div className="flex items-center space-x-2">
                  <Switch
                    id="allowRegistration"
                    checked={siteSettings.allowRegistration}
                    onCheckedChange={(checked) => handleSiteSettingsChange('allowRegistration', checked)}
                    className="data-[state=checked]:bg-[#333]"
                  />
                  <Label htmlFor="allowRegistration" className="text-gray-200">Allow User Registration</Label>
                </div>

                <Button 
                  onClick={() => handleSaveSettings('site')}
                  className="bg-[#333] hover:bg-[#444] text-white"
                >
                  Save Site Settings
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="email">
            <Card className="bg-[#1E1E1E] border-[#333]">
              <CardHeader>
                <CardTitle className="text-white">Email Configuration</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="smtpHost" className="text-gray-200">SMTP Host</Label>
                  <Input
                    id="smtpHost"
                    value={emailSettings.smtpHost}
                    onChange={(e) => handleEmailSettingsChange('smtpHost', e.target.value)}
                    className="bg-[#222] border-[#444] text-white focus:border-[#666] focus:ring-[#666]"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="smtpPort" className="text-gray-200">SMTP Port</Label>
                  <Input
                    id="smtpPort"
                    type="number"
                    value={emailSettings.smtpPort}
                    onChange={(e) => handleEmailSettingsChange('smtpPort', e.target.value)}
                    className="bg-[#222] border-[#444] text-white focus:border-[#666] focus:ring-[#666]"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="smtpUsername" className="text-gray-200">SMTP Username</Label>
                  <Input
                    id="smtpUsername"
                    value={emailSettings.smtpUsername}
                    onChange={(e) => handleEmailSettingsChange('smtpUsername', e.target.value)}
                    className="bg-[#222] border-[#444] text-white focus:border-[#666] focus:ring-[#666]"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="smtpPassword" className="text-gray-200">SMTP Password</Label>
                  <Input
                    id="smtpPassword"
                    type="password"
                    value={emailSettings.smtpPassword}
                    onChange={(e) => handleEmailSettingsChange('smtpPassword', e.target.value)}
                    className="bg-[#222] border-[#444] text-white focus:border-[#666] focus:ring-[#666]"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="fromEmail" className="text-gray-200">From Email</Label>
                  <Input
                    id="fromEmail"
                    type="email"
                    value={emailSettings.fromEmail}
                    onChange={(e) => handleEmailSettingsChange('fromEmail', e.target.value)}
                    className="bg-[#222] border-[#444] text-white focus:border-[#666] focus:ring-[#666]"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="fromName" className="text-gray-200">From Name</Label>
                  <Input
                    id="fromName"
                    value={emailSettings.fromName}
                    onChange={(e) => handleEmailSettingsChange('fromName', e.target.value)}
                    className="bg-[#222] border-[#444] text-white focus:border-[#666] focus:ring-[#666]"
                  />
                </div>

                <Button 
                  onClick={() => handleSaveSettings('email')}
                  className="bg-[#333] hover:bg-[#444] text-white"
                >
                  Save Email Settings
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </Card>
    </div>
  );
};

export default Settings; 