<div id="page-wrapper"><div id="page">


  <?php if($page['page-top']):  ?>
  <div id="page-top"><div class="section clearfix">
    <?php print render($page['page-top']); ?>
  </div></div> 
  <?php endif; ?>
  <!-- /.section, /#header -->


  <div id="main-wrapper" class="clearfix"><div id="main" class="clearfix">

	<?php if($page['page-content']): ?>
   	 <div id="main-content" class="column"><div class="section">
     	 <?php print render($page['page-content']); ?>
   	 <div></div>
	<?php endif; ?>

  </div></div> <!-- /#main, /#main-wrapper -->


  <div id="footer-wrapper"><div class="section">

    <?php if ($page['page-bottom']): ?>
      <div id="footer" class="clearfix">
        <?php print render($page['page-bottom']); ?>
      </div> <!-- /#footer -->
    <?php endif; ?>

  </div></div> <!-- /.section, /#footer-wrapper -->

</div></div> <!-- /#page, /#page-wrapper -->
