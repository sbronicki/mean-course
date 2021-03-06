import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatExpansionModule } from '@angular/material/expansion';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PostCreateComponent } from './posts/post-create/post-create.component';
import { Header } from './header/header.component';
import { PostListComponent } from './posts/post-list/post-list.component';
import { PostsService } from './posts/posts.service';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
	declarations: [ AppComponent, PostCreateComponent, Header, PostListComponent ],
	imports: [
		BrowserModule,
		AppRoutingModule,
		ReactiveFormsModule,
		NoopAnimationsModule,
		MatInputModule,
		MatButtonModule,
		MatCardModule,
		MatToolbarModule,
		MatExpansionModule,
		MatProgressSpinnerModule,
		HttpClientModule
	],
	providers: [ PostsService ],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
