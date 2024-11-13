using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Data;
using api.Dtos.Comment;
using api.Interfaces;
using api.Mappers;
using api.Repository;
using Microsoft.AspNetCore.Mvc;
using Microsoft.VisualBasic;

namespace api.Controllers
{
     [Route("api/comment")]
     [ApiController]

    public class CommentController : ControllerBase
    {

            private readonly ApplicationDBContext _context;
            private readonly ICommentRepository _commentRepo;

            
            private readonly IStockRepository _stockRepo;
            public CommentController(ApplicationDBContext context, ICommentRepository commentRepo, IStockRepository stockRepo)
            {
                _commentRepo = commentRepo;
                _stockRepo = stockRepo;
                _context = context;

            }

            [HttpGet]

            public async Task<IActionResult> GetAll()
            {
                var comments = await _commentRepo.GetAllAsync();
                var commentDto = comments.Select(s => s.ToCommentDto());
                return Ok(commentDto);

            }


             [HttpGet("{id}")]
            public async Task<IActionResult> GetById([FromRoute] int id)
            {
                var comment =  await _commentRepo.GetByIdAsync(id);

                if(comment==null)
                {
                    return NotFound();
                }

                return Ok(comment.ToCommentDto());
            }


            
            [HttpPost ("{stockId}")]

            public async Task<IActionResult> Create([FromRoute] int stockId, CreateCommentDto commentDto  )
            {

                if (!await _stockRepo.StockExists(stockId))
                {
                    return BadRequest("Stock does not exist");

                }

                var commentModel = commentDto.ToCommentFromCreate(stockId);
                await _commentRepo.CreateAsync(commentModel);
                return CreatedAtAction(nameof(GetById), new {id = commentModel}, commentModel.ToCommentDto());










            }
        






        }

        
        
    }
