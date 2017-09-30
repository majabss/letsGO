import { SettingsPage } from './../settings/settings';
import { LeaderboardPage } from './../leaderboard/leaderboard';
import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = LeaderboardPage;
  tab2Root = HomePage;
  tab3Root = SettingsPage;

  constructor() {

  }
}
