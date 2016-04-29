import React, { Component, PropTypes } from 'react';

/*
 * Note: This is kept as a container-level component,
 *  i.e. We should keep this as the container that does the data-fetching
 *  and dispatching of actions if you decide to have any sub-components.
 */
class FixedNav extends Component {
    render() {
        return (
            <nav class="navigation">
                <div class="nav-control">
                    <a data-toggle="offcanvas" href="javascript:void(0);"><i class="fa fa-navicon"></i></a>
                </div>
				<div class="container">
	                <ul class="nav navbar-nav">
                        <li class="pc_nav">
		                    <div class="nav_close" data-toggle="offcanvas">
		                        <button type="button" class="fa fa-close"></button>
		                    </div>
							<div class="menu-main-menu-container">
                                <ul id="menu-main-menu" class="nav_menu">
                                    <li id="menu-item-17" class="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home menu-item-has-children menu-item-17">
                                        <a href="http://demo.roartheme.com/wordpress/timeline2/">Home</a>
                                        <ul class="sub-menu">
                                            <li id="menu-item-235" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-235"><a href="#">Standard Layout</a>
                                                <ul class="sub-menu">
                                                    <li id="menu-item-236" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-236"><a href="http://demo.roartheme.com/wordpress/timeline2/?layout=left_sidebar">Left Sidebar</a></li>
                                                    <li id="menu-item-237" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-237"><a href="http://demo.roartheme.com/wordpress/timeline2/?layout=right_sidebar">Right Sidebar</a></li>
                                                    <li id="menu-item-238" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-238"><a href="http://demo.roartheme.com/wordpress/timeline2/?layout=fullwidth">No Sidebar</a></li>
                                                </ul>
                                            </li>
                                                <li id="menu-item-239" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-239"><a href="#">List Layout</a>
                                                <ul class="sub-menu">
                                                    <li id="menu-item-241" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-241"><a href="http://demo.roartheme.com/wordpress/timeline2/?layout=list_left_sidebar">Left Sidebar</a></li>
                                                    <li id="menu-item-242" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-242"><a href="http://demo.roartheme.com/wordpress/timeline2/?layout=list_right_sidebar">Right Sidebar</a></li>
                                                    <li id="menu-item-240" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-240"><a href="http://demo.roartheme.com/wordpress/timeline2/?layout=list">No Sidebar</a></li>
                                                </ul>
                                            </li>
                                            <li id="menu-item-243" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-243"><a href="#">Grid Layout</a>
                                                <ul class="sub-menu">
                                                    <li id="menu-item-244" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-244"><a href="http://demo.roartheme.com/wordpress/timeline2/?layout=grid_left_sidebar">Left Sidebar</a></li>
                                                    <li id="menu-item-246" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-246"><a href="http://demo.roartheme.com/wordpress/timeline2/?layout=grid_right_sidebar">Right Sidebar</a></li>
                                                    <li id="menu-item-245" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-245"><a href="http://demo.roartheme.com/wordpress/timeline2/?layout=grid">No Sidebar</a></li>
                                                </ul>
                                            </li>
                                            <li id="menu-item-247" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-247"><a href="#">1st Full Post then List</a>
                                                <ul class="sub-menu">
                                                    <li id="menu-item-250" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-250"><a href="http://demo.roartheme.com/wordpress/timeline2/?layout=mix_list_left_sidebar">Left Sidebar</a></li>
                                                    <li id="menu-item-251" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-251"><a href="http://demo.roartheme.com/wordpress/timeline2/?layout=mix_list_right_sidebar">Right Sidebar</a></li>
                                                    <li id="menu-item-249" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-249"><a href="http://demo.roartheme.com/wordpress/timeline2/?layout=mix_list">No Sidebar</a></li>
                                                </ul>
                                            </li>
                                            <li id="menu-item-248" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-248"><a href="#">1st Full Post then Grid</a>
                                                <ul class="sub-menu">
                                                    <li id="menu-item-253" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-253"><a href="http://demo.roartheme.com/wordpress/timeline2/?layout=mix_grid_left_sidebar">Left Sidebar</a></li>
                                                    <li id="menu-item-254" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-254"><a href="http://demo.roartheme.com/wordpress/timeline2/?layout=mix_grid_right_sidebar">Right Sidebar</a></li>
                                                    <li id="menu-item-252" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-252"><a href="http://demo.roartheme.com/wordpress/timeline2/?layout=mix_grid">No Sidebar</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li id="menu-item-72" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-72"><a href="#">Features</a>
                                        <ul class="sub-menu">
                                            <li id="menu-item-94" class="menu-item menu-item-type-post_type menu-item-object-post menu-item-94"><a href="http://demo.roartheme.com/wordpress/timeline2/every-broken-has-its-own-ok/">Standart Post</a></li>
                                            <li id="menu-item-95" class="menu-item menu-item-type-post_type menu-item-object-post menu-item-95"><a href="http://demo.roartheme.com/wordpress/timeline2/big-city-life/">Gallery Post</a></li>
                                            <li id="menu-item-93" class="menu-item menu-item-type-post_type menu-item-object-post menu-item-93"><a href="http://demo.roartheme.com/wordpress/timeline2/video-post/">Video Post</a></li>
                                            <li id="menu-item-96" class="menu-item menu-item-type-post_type menu-item-object-post menu-item-96"><a href="http://demo.roartheme.com/wordpress/timeline2/zeds-dead-x-memorecks-love-me/">Audio Post</a></li>
                                        </ul>
                                    </li>
                                    <li id="menu-item-121" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-121">
                                        <a href="http://demo.roartheme.com/wordpress/timeline2/lookbook/">Lookbook</a>
                                    </li>
                                    <li id="menu-item-110" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-110">
                                        <a href="http://demo.roartheme.com/wordpress/timeline2/about-us/">About us</a>
                                    </li>
                                    <li id="menu-item-109" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-109">
                                        <a href="http://demo.roartheme.com/wordpress/timeline2/contact-us/">Contact us</a>
                                    </li>
                                </ul>
                            </div>						
                        </li>
                        <li class="pc_more">
							<div class="social">
								<a title="Facebook" target="_blank" href="https://www.facebook.com/" class="social-icon"><i class="fa fa-facebook"></i></a><a title="Twitter" target="_blank" href="https://twitter.com/" class="social-icon"><i class="fa fa-twitter"></i></a><a title="Pinterest" target="_blank" href="https://www.pinterest.com/" class="social-icon"><i class="fa fa-pinterest"></i></a><a title="Google-plus" target="_blank" href="https://plus.google.com/" class="social-icon"><i class="fa fa-google-plus"></i></a><a title="Tumblr" target="_blank" href="https://www.tumblr.com/" class="social-icon"><i class="fa fa-tumblr"></i></a>							</div>
							<a href="javascript:void(0);" class="search-ctl"><i class="fa fa-search"></i></a>
						</li>
	                </ul>
				</div>
                <div id="search-ctl">
                    <form action="http://demo.roartheme.com/wordpress/timeline2/" method="get" id="search" class="search-form">
	                   <input type="search" placeholder="Search and hit enter..." name="s" id="s" />
                        <i class="fa fa-close"></i>
                    </form>                
                </div>
            </nav>
        );
    }
}

export default FixedNav;
