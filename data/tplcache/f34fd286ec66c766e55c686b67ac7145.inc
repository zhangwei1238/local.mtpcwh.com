<div class="bz_box" style="background:url({dede:global.cfg_templets_skin/}/images/main_3_1.jpg) no-repeat;">
        <h2><a href="{dede:field name='typeurl'/}">{dede:field name='typename'/}<span>更多...</span></a></h2>
        <ul>
        {dede:channel type='son' noself='yes' }
        <li><a href="[field:typelink/]" rel="nofollow">[field:typename/]</a></li>
        {/dede:channel}
        </ul>
        
        {dede:arclist titlelen='50' row='1' flag='c'}
        <h3><a href="[field:arcurl/]">[field:title /]</a></h3>
        <p><span>导读：</span>饮食不当是导致甲亢的因素之一，科学饮食能够起到有效预防甲亢的作…<a href="[field:arcurl/]"><详情></a></p>
        {/dede:arclist}
                   
        <ol>
        {dede:arclist titlelen='50' row='5' flag='c'}
          <li><a href="[field:arcurl/]"><span>>></span>[field:title /]</a> </li>
        {/dede:arclist}
        </ol>
      </div>