import React from 'react';
import classNames from 'classnames/bind';
import styles from 'css/components/post';
var cx = classNames.bind(styles);

var Post = React.createClass({
    render: function () {
        return (
            <div className="post-outer">
                <span id="post-time">
                    <span className="dday">04</span>
                    <span className="dmonth">Oct</span>
                    <span className="dyear">2015</span>
                </span>
                <article className={cx('post', 'hentry')} itemscope="" itemtype="http://schema.org/BlogPosting">
                    <div className="post-body entry-content" id="post-body-7678110904519489062" itemprop="description articleBody">
                        <textarea id="postData-7678110904519489062" value="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book" />
                        <div className="post-summary" id="summaryContainer-7678110904519489062">
                            <div className="post-top">
                                <div className="postthumb postimage">
                                    <a className="thumbimgx" data-placement="top" data-toggle="tooltip" href="http://timeline-demo2.blogspot.com/2015/10/lake-surrounded-by-green-trees.html" title="" data-original-title="lake surrounded by green trees">
                                        <img alt="lake surrounded by green trees"  className="thumbimg" height="281" src="./Timeline2_files/CM7EPBYLQA(1).jpg" width="468.5" />
                                    </a>
                                    <div className="image-hover">
                                        <a href="http://timeline-demo2.blogspot.com/2015/10/lake-surrounded-by-green-trees.html">
                                            <span className="span-hover"></span>
                                        </a>
                                    </div>
                                    <div className="share-buttons">
                                        <span>Share This</span>
                                        <div className="social-share">
                                            <a className="facebook-share" href="http://timeline-demo2.blogspot.com/&amp;target=facebook" target="_blank" title="Share to Facebook">
                                                <i className="fa fa-facebook"></i>
                                            </a>
                                            <a className="twitter-share" href="http://timeline-demo2.blogspot.com/&amp;target=twitter" target="_blank" title="Share to Twitter">
                                                <i className="fa fa-twitter"></i>
                                            </a>
                                            <a className="pinterest-share" href="http://timeline-demo2.blogspot.com/&amp;target=pinterest" target="_blank" title="Share to Pinterest">
                                                <i className="fa fa-pinterest"></i>
                                            </a>
                                            <a className="gplus-share" href="http://timeline-demo2.blogspot.com/&amp;target=googleplus" target="_blank" title="Share to Google Plus">
                                                <i className="fa fa-google-plus"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="post-bottom">
                                <div className="post-title">
                                    <strong>
                                        <a href="http://timeline-demo2.blogspot.com/2015/10/lake-surrounded-by-green-trees.html" title="lake surrounded by green trees">
                                            lake surrounded by green trees
                                        </a>
                                    </strong>
                                </div>
                                <div className="post-details">
                                    <span className="post-author">
                                        <i className="fa fa-user"></i>
                                        <a href="https://plus.google.com/108152365170057624125" rel="author" title="author profile">
                                            Talal Alaita
                                        </a>
                                    </span>
                                    <span className="post-date">
                                        <i className="fa fa-clock-o"></i>
                                        October 04, 2015
                                    </span>
                                    <span className="post-label">
                                        <i className="fa fa-tag"></i>
                                        <a href="http://timeline-demo2.blogspot.com/search/label/Nature" rel="tag">Nature</a>
                                    </span>
                                </div>
                                <p className="post-snippet">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the ...
                                </p>
                                <div className="clear"></div>
                                <div className="read-more-link">
                                    <a href="http://timeline-demo2.blogspot.com/2015/10/lake-surrounded-by-green-trees.html#more" title="Read more » lake surrounded by green trees">
                                        Read more »
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <span className="datex hidex">
                        <strong></strong>
                        <span></span>
                        <small></small>
                    </span>
                </article>
            </div>
        );
    }
});

export default Post;